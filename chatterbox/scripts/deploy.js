const hre = require("hardhat");

async function main() {
    const ChatterBox = await hre.ethers.getContractFactory("ChatterBox");
    const chatterBox = await ChatterBox.deploy();

    // Wait for the contract to be deployed (Ethers.js v6 syntax)
    await chatterBox.waitForDeployment();  

    // Access the contract address after deployment (Ethers.js v6 syntax)
    console.log(`Contract Address: ${await chatterBox.getAddress()}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
