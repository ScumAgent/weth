# WETH Contract

This repository contains the Wrapped Ether contract, which converts Ethereum into an equivalent value ERC-20 token.

### Deployment Address

- WETH: [0x324e4d9afbEe1b5cA0c0F37e7b771a18094B39A6](https://sepolia.arbiscan.io/address/0x324e4d9afbEe1b5cA0c0F37e7b771a18094B39A6)

## Prerequisites

- Node.js v12+ LTS and npm (comes with Node)
- Hardhat

## Installation

### Clone the repository:

```bash
git clone https://github.com/ScumAgent/weth
```

### Navigate to the project folder:

```bash
cd weth
```

### Install dependencies:

```bash
npm istall
```

## Set Up Configuration

1. Review the .example.env file.
2. Create a .env file based on the example and adjust the values as needed.

### For Linux or macOS:

```bash
cp .example.env .env
```

### Windows:

```bash
copy .example.env .env
```

## Compilation

Compile the smart contracts using Hardhat:

```bash
npx hardhat compile
```

## Quick Start Guide

### 1. Testing

Run the following command to execute the contract tests. Ensure you've written the tests in your Hardhat project's test directory.

```bash
npx hardhat test
```

### 2. Deployment

Run the following command to compile the contracts using the Solidity compiler and deploy the WETH.

```bash
npx hardhat run scripts/deploy.js --network arbtest
```

## Conclusion

If you would like to contribute to the project, please fork the repository, make your changes, and then submit a pull request. We appreciate all contributions and feedback!