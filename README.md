# 🚚 Blockchain-Based Shipment Tracking System

A web-based application that leverages blockchain technology to provide **tamper-proof, transparent, and real-time shipment tracking**.

---

## 📌 Overview

Traditional shipment tracking systems rely on centralized databases, which can be manipulated or inconsistent across stakeholders.

This project uses blockchain to:
- Ensure data integrity  
- Provide transparent tracking  
- Maintain a secure history of shipment updates  

---

## 🚀 Features

- 📦 Create new shipments  
- 📍 Update shipment location  
- 📜 View complete shipment history  
- 🔐 Immutable data stored on blockchain  
- 🌐 Simple web-based interface  

---

## 🧱 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js, Express  
- **Blockchain:** Solidity, Hardhat, Ethers.js  

---

## 🏗️ Architecture

Frontend (HTML/JS)  
↓  
Backend (Node.js / Express)  
↓  
Blockchain (Smart Contract - Ethereum Local Network)  

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/shipment-tracker.git
cd shipment-tracker

### 2️⃣ Setup Smart Contract

    cd smart-contract
    npm install
    npx hardhat compile
    npx hardhat node

Open a new terminal:

    npx hardhat run scripts/deploy.js --network localhost

Copy the deployed contract address.

---

### 3️⃣ Setup Backend

    cd ../backend
    npm install

Update contract address in `server.js`:

    const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";

Run backend:

    node server.js

---

### 4️⃣ Run Frontend

    cd ../frontend
    python -m http.server 5500

Open in browser:  
http://localhost:5500  

---

## 🧪 How to Use

1. Create Shipment  
2. Update Location  
3. Track Shipment  

---

## 🧠 How It Works

- Each shipment is stored in the smart contract  
- Every update is recorded as a blockchain transaction  
- Data is immutable and transparent  

---

## ⚠️ Challenges & Solutions

| Challenge | Solution |
|----------|---------|
| High gas fees | Use local blockchain / Polygon |
| Data size limits | Store minimal data on-chain |
| Latency | Batch updates if needed |

---

## 🔮 Future Improvements

- 📍 Live GPS tracking  
- 🗺️ Map integration  
- 🔐 MetaMask authentication  
- ☁️ Deploy on Polygon testnet  
- 📊 Analytics dashboard  

---

## 🎯 Learning Outcomes

- Smart contract development using Solidity  
- Blockchain integration with web apps  
- Handling BigInt serialization issues  
- Full-stack Web3 development  

---



## 📜 License

This project is open-source under the MIT License.

