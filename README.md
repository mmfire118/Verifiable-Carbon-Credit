# VCC

VCC is a fully verifiable on-chain carbon credit ecosystem. Our platform allows companies to do the following, all fully on-chain and open-source:
- upload carbon project data
- verifiably calculate estimated carbon offset amounts
- trade, exchange, and retire carbon credits

## Description

### Problem 

The existing carbon credit market has many inefficiencies which we believe can be solved using blockchain.

Currently, carbon credit projects are very hard to verify. Currently,verification is provided by a handful of centralized entities, and is a very time and labor intensive process. This is reaffirmed by status of wait times of over 3 years for new projects to be approved, and high managerial overhead.

In addition, these carbon credits have no standard regularization. This means that credits are erratically issued without a standard unit, have no backing, and lack transparent data (usually PDFs stored on centralized servers) regarding their sources.

Lastly, the cost overhead for carbon credit management is very high due to the expensive measurement, reporting, and data verification costs. This is in part to do the significant amount of manual work going into carbon credits.

### Solution

VCC is a fully on-chain platform that aims to solve these issues through the following novel features:
- Companies can upload specific, structured, quantifiable project metadata on-chain.
- Companies can ***verifiably*** calculate estimated carbon offset amounts given measurement data. Both the measurement data and the calculations themselves are fully on-chain (TRON network smart contracts).
- Companies can interact with their crypto wallets (TRON network) to interact with tokenized carbon credits, which are ***automatically credited*** after verification, in a open and decentralized fashion.
  
For our proof of concept, we chose the specific project type of forestry (biomass and CO2 capture per tree per year). Through researching existing project design documents, monitoring reports, and reading many academic papers in the field, we have identified key data properties of such projects to upload on-chain, and have also marked measurements to feed into a custom-developed on-chain quantitative model in order to accurately and verifiably predict carbon offsets.

Our solution is fully integrated into the TRON ecosystem. Companies authenticate into their TronLink wallets, and interact with smart contracts deployed on the TRON testnet chain for referencing on-chain data storage, on-chain carbon credit verification, and on-chain exchange of tokenized carbon credits.

## Technical Explanation

### Frontend
Our frontend is built in HTML, CSS ...
TODO: @Miles

We use the web-based TronLink frontend connection to authenticate into user wallets and interact with the smart contracts on-chain. The developer-friendly documentation and Javascript interactions on TRON made it possible for us to quickly iterate on our user experience and user flow.

### Backend

We interact with Moralis, an enterprise-grade Web3 API provider, to upload project metadata to IPFS, a decentralized open-source peer-to-peer file storage system. This API call (`/upload`) is the singular express endpoint VCC has exposed, and can be moved into a frontend call or a direct IPFS node interaction in the future for full decentralization.

### Smart Contracts

We deployed the following Solidity contracts on the TRON Nile testnet: https://gist.github.com/WilliamHYZhang/fe7d33f385b90736d92701e6e56b82be.

- OpenZepplin-based ERC20 contracts
  - `Context.sol`: provides information about correct execution context.
  - `IERC20.sol`: Interface of the ERC20 standard, interchangable with TRC20.
  - `IERC20Metadata.sol`: Interface for optional metadata functions of the ERC20 standard.
  - `SafeMath.sol`: Math operations with safety checks.

- `CarbonCredit.sol`
  - We store mappings of company (`msg.sender`) addresses to the uploaded metadata, project design document (in metadata format), and project monitoring report (in metadata format).
  - The constructor initializes the token with the name "Verifiable Carbon Credit" and the symbol "VCC".
  - The main part of the contract is `verify`, an external function that allows a company to pass in the metadata mappings in order to calculate carbon offset, verify, and mint the offset amount to the company wallet address.
    - In order to tackle the significant problem of fractionalized exponents for our quantitative models, we based a framework around the Bancor protocol that uses logarithmic approximation to calculate the exponents with a 2^precision factor.
    - We currently assume linear decline in the growth rate of the biomass, however in the future we hope to implement a logarithmic decline, which while more complicated would be even more accurate.
    - Refer to our code to see our calculations and rationale behind them.

For local testing, we use HardHat and ethers.js to build out a robust test suite that deploys a local blockchain and simulates transactions.

We used the TRON nile test faucet and set up a TronLink wallet to deploy these contracts on-chain. By using the Tronide code editor and GUI to deploy our contracts, we were able to compile Solidity in a cloud-based editor, connect with a wallet, and deploy instantaneously without having to deal with command-line interactions and manually connecting our wallet through more code. This enabled us to rapidly speed up our development and user testing timeline.

## Usage

In `/contract`:
- Install repository dependencies with `npm install`.
- Compile with `npx hardhat compile`.
- Test with `npx hardhat test`.

In `/api`:
- Run with `nodejs index.js` (Moralis backend API endpoint).

In `/frontend`:
- TODO @Miles