import express from "express";
import { ethers } from "ethers";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const ABI = [
  "function createShipment(string,string)",
  "function updateLocation(string,string)",
  "function getHistory(string) view returns (tuple(string location,uint256 timestamp)[])"
];

async function startServer() {
  const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");
  const signer = await provider.getSigner(0);

  const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

  app.post("/create", async (req, res) => {
    const { id, location } = req.body;
    const tx = await contract.createShipment(id, location);
    await tx.wait();
    res.send("Shipment created");
  });

  app.post("/update", async (req, res) => {
    const { id, location } = req.body;
    const tx = await contract.updateLocation(id, location);
    await tx.wait();
    res.send("Updated");
  });

  app.get("/history/:id", async (req, res) => {
    try {
      const data = await contract.getHistory(req.params.id);
  
      const formatted = data.map(item => ({
        location: item.location,
        timestamp: Number(item.timestamp)  // ✅ convert BigInt → Number
      }));
  
      res.json(formatted);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error fetching history");
    }
  });

  app.listen(3000, () => console.log("✅ Server running on port 3000"));
}

startServer().catch(console.error);