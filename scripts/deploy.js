const { ethers } = require("hardhat");

async function main() {
    // Retrieve the WETH contract
    const WETH = await ethers.getContractFactory("WETH");
    console.log("Deploying WETH contract...");

    // Deploy the contract
    const wETH = await WETH.deploy();

    // Wait until the contract is fully deployed
    await wETH.waitForDeployment();
    console.log("WETH deployed to:", wETH.target);
}

// Execute the main function and handle errors appropriately
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
