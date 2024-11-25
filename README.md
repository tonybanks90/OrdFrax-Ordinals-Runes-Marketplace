OrdFrax - Ordinals & Runes Marketplace
OrdFrax is a decentralized marketplace that simplifies the minting, listing, and trading of Ordinals and Runes inscriptions. Built on the Internet Computer Protocol (ICP) as a Bitcoin L2, OrdFrax utilizes innovative onchain capabilities, such as Threshold Schnorr Signatures, for seamless integration with the Bitcoin blockchain.

This project explores creating and managing Bitcoin Ordinals and Runes inscriptions using Pay-to-Taproot (P2TR) outputs. Threshold Schnorr signatures, available on the ICP mainnet since the Deuterium Milestone, are a key enabler for this functionality. For further details, refer to the Internet Computer documentation.

Quick Start
Before starting, ensure the following are installed on your system:

Node.js >= 16.x
dfx >= 0.22.x
Rust
Docker (including Docker Compose)
⚠️ Note: Only dfx >= 0.22.x supports Threshold Schnorr Signatures. Ensure you have the correct version installed.

1. System Configuration
After installing Rust, configure your environment for Internet Computer development:

sh
Copy code
rustup target add wasm32-unknown-unknown
cargo install cargo-watch # Optional: Live reload for development
2. Initialize Services
Make sure Docker is running, then initialize the Bitcoin and Ordinals services:

sh
Copy code
./init.sh
For Apple Silicon users, enable platform emulation:

sh
Copy code
DOCKER_DEFAULT_PLATFORM=linux/amd64 ./init.sh
3. Start the Local Environment
Start a clean local dfx replica in a new terminal:

sh
Copy code
dfx start --clean
Launch a proxy to connect the frontend to the local Bitcoin RPC server:

sh
Copy code
npm install
npm run proxy
Deploy the canisters:

sh
Copy code
./deploy.sh
Upon successful deployment, you will see URLs for the deployed frontend and backend canisters:

bash
Copy code
Deployed canisters.
URLs:
  Frontend canister:
    http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943/
  Backend canisters:
    backend: http://bnz7o-iuaaa-aaaaa-qaaaa-cai.localhost:4943/?id=bd3sg-teaaa-aaaaa-qaaba-cai
    schnorr_canister: http://bnz7o-iuaaa-aaaaa-qaaaa-cai.localhost:4943/?id=6fwhw-fyaaa-aaaap-qb7ua-cai
Visit the frontend in your browser using the provided URL.

4. Local Development Frontend (Optional)
Run the local frontend with hot reload, accessible at http://localhost:3000:

sh
Copy code
npm run frontend
Deployment Process
Stopping the Service
To stop all services:

sh
Copy code
docker compose down
dfx stop
Manually stop the proxy and frontend processes. To remove container data, run:

sh
Copy code
docker compose down -v
Architecture
OrdFrax leverages the power of Bitcoin and ICP to bridge onchain marketplaces with decentralized technologies.



How It Works
Ordinals and Runes inscriptions are created by spending Pay-to-Taproot (P2TR) outputs. Here’s an overview:

Commit Transaction:
A Bitcoin transaction creates a P2TR output that commits to a reveal script containing the inscription. This transaction is signed using ECDSA by the inscription canister.

Reveal Transaction:
The P2TR output is spent, revealing the inscription via a Schnorr signature and the reveal script. A new output is created, associating the Ordinal or Rune with the destination address.



Features
Decentralized Minting: Seamlessly create Bitcoin inscriptions.
Marketplace Integration: List and trade inscriptions in a decentralized environment.
Bitcoin L2 Scalability: Built on the Internet Computer, leveraging speed and cost-efficiency.
Troubleshooting
If you inscribe an Ordinal or Rune but it doesn’t appear on the ord server, check the Bitcoin transaction logs in the dfx terminal.

To debug:

Extract the raw transaction data from the logs.
Use the testmempoolaccept command to verify the transaction:
sh
Copy code
docker compose exec bitcoind bitcoin-cli testmempoolaccept '["<raw_transaction_hex>"]'
Credits
This project draws inspiration from:

DFINITY Basic Bitcoin sample project
Ord
