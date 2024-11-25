# OrdFrax - Ordinals & Runes Marketplace

This example project demonstrates how **Ordinals** and **Runes** inscriptions can be minted, listed, and traded on the Bitcoin blockchain using the **Internet Computer Protocol (ICP)** as a Bitcoin Layer 2 solution. 

Inscriptions are created by spending a Pay-to-Taproot (P2TR) output, which requires **Schnorr signatures**. Threshold Schnorr signatures have been supported on the ICP mainnet since the [Deuterium Milestone](https://x.com/dfinity/status/1823341406254985448). More information about threshold Schnorr signatures can be found in the [Internet Computer documentation](https://internetcomputer.org/docs/current/developer-docs/smart-contracts/signatures/signing-messages-t-schnorr).

This project has been tested on a local development environment using a Mac with Apple Silicon. It may not work on other platforms. Please file an issue if you encounter any problems.

---

## Quick Start

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) `>= 16.x`
- [`dfx`](https://internetcomputer.org/docs/current/developer-docs/build/install-upgrade-remove) `>= 0.22.x`
- [Rust](https://www.rust-lang.org/tools/install)
- [Docker](https://docs.docker.com/get-docker/) (including Docker Compose)

> ⚠️ Only dfx `>= 0.22.x` supports Threshold Schnorr Signatures. Ensure you have the correct version installed.

After installing Rust, configure your environment for IC canister development:

```sh
rustup target add wasm32-unknown-unknown # Required for building IC canisters
cargo install cargo-watch # Optional; used for live reloading in `npm start`
Make sure Docker is running, then start the Bitcoin and Ordinals services by running:

sh
Copy code
Make sure Docker is running, then start the Bitcoin and Ordinals services by running:

sh
Copy code
./init.sh
If you are using Apple Silicon, enable platform emulation:

sh
Copy code
DOCKER_DEFAULT_PLATFORM=linux/amd64 ./init.sh
Start the local dfx replica in a new terminal:

sh
Copy code
dfx start --clean
Then, start a proxy to enable the frontend to connect to the local Bitcoin RPC server:

sh
Copy code
npm install
npm run proxy
Build and deploy the canisters:

sh
Copy code
./deploy.sh
Upon deployment, the following URLs should be displayed:

bash
Copy code
Deployed canisters.
URLs:
  Frontend canister via browser
    frontend: http://be2us-64aaa-aaaaa-qaabq-cai.localhost:4943/
  Backend canister via Candid interface:
    backend: http://bnz7o-iuaaa-aaaaa-qaaaa-cai.localhost:4943/?id=bd3sg-teaaa-aaaaa-qaaba-cai
    schnorr_canister: http://bnz7o-iuaaa-aaaaa-qaaaa-cai.localhost:4943/?id=6fwhw-fyaaa-aaaap-qb7ua-cai
Open the frontend in your browser using the URL provided.

The ord server runs at http://localhost:8080. View your inscriptions at http://localhost:8080/inscriptions.

Optionally, start a local development frontend with hot reload, accessible at http://localhost:3000, by running:

sh
Copy code
npm run frontend
Stopping the Service
To stop the services:

sh
Copy code
docker compose down
dfx stop
Manually stop the proxy and frontend processes. To remove container data, use:

sh
Copy code
docker compose down -v
Architecture


How it Works
Ordinals and Runes inscriptions are created by spending a Pay-to-Taproot (P2TR) output. This process involves two Bitcoin transactions:

Commit Transaction:
This transaction creates a P2TR output by spending one or more P2PKH outputs controlled by the inscription canister via ECDSA signatures. It commits to a reveal script containing the inscription data.

Reveal Transaction:
This transaction spends the P2TR output, revealing the inscription data through the reveal script and a Schnorr signature. A new output is created, associating the inscription with the destination address.



Troubleshooting
If you inscribe an Ordinal or Rune but it does not appear on the ord server, check the Bitcoin transaction logs in the dfx terminal. Locate the raw transaction data for the reveal transaction and use the testmempoolaccept command to check for issues:

sh
Copy code
docker compose exec bitcoind bitcoin-cli testmempoolaccept '["<raw_transaction_hex>"]'
Credits
This repository draws inspiration from:

DFINITY Basic Bitcoin sample project
Ord
vbnet
Copy code

