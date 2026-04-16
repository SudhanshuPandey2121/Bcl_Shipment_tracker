🚚 Blockchain-Based Shipment Tracking System

A web-based application that leverages blockchain technology to provide tamper-proof, transparent, and real-time shipment tracking.

📌 Overview

Traditional shipment tracking systems rely on centralized databases, which can be manipulated or inconsistent across stakeholders.

This project uses blockchain to:

Ensure data integrity
Provide transparent tracking
Maintain a secure history of shipment updates
🚀 Features
📦 Create new shipments
📍 Update shipment location
📜 View complete shipment history
🔐 Immutable data stored on blockchain
🌐 Simple web-based interface
🧱 Tech Stack
Frontend
HTML, CSS, JavaScript
Backend
Node.js, Express
Blockchain
Solidity (Smart Contracts)
Hardhat (Development environment)
Ethers.js (Blockchain interaction)
🏗️ Architecture
Frontend (HTML/JS)
        ↓
Backend (Node.js / Express)
        ↓
Blockchain (Smart Contract - Ethereum Local Network)
⚙️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/shipment-tracker.git
cd shipment-tracker
2️⃣ Setup Smart Contract
cd smart-contract
npm install
npx hardhat compile
npx hardhat node

👉 Open a new terminal:

npx hardhat run scripts/deploy.js --network localhost

👉 Copy the deployed contract address

3️⃣ Setup Backend
cd ../backend
npm install

👉 Update contract address in server.js

const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS";

Run backend:

node server.js
4️⃣ Run Frontend
cd ../frontend
python -m http.server 5500

Open:

http://localhost:5500
🧪 How to Use
Create Shipment
Enter Shipment ID and initial location
Update Location
Add new location updates
Track Shipment
View complete history with timestamps
🧠 How It Works
Each shipment is stored as a smart contract entry
Every update is recorded as a new transaction
Data is:
Immutable
Transparent
Decentralized
⚠️ Challenges & Solutions
Challenge	Solution
High gas fees	Use local blockchain / Polygon
Data size limits	Store minimal data on-chain
Latency	Batch updates if needed
🔮 Future Improvements
📍 Live GPS tracking
🗺️ Map integration (Google Maps / Leaflet)
🔐 MetaMask authentication
☁️ Deploy on Polygon testnet
📊 Analytics dashboard
🎯 Learning Outcomes
Smart contract development using Solidity
Blockchain integration with web apps
Handling real-world issues like BigInt serialization
Full-stack development with Web3