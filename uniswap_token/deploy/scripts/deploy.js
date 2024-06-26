//script to deploy the contract and abi

const hre = require("hardhat");

async function main() {
    //Get the contract factory
  const CustomDexFactory = await hre.ethers.getContractFactory("CustomDex");

  //Deploy the contract
  const CustomDex = await CustomDexFactory.deploy();

   // Wait for the contract to be deployed
  await CustomDex.deployed();
  // Log the address of the deployed contract
  console.log(` CustomDex: ${CustomDex.address}`);
}

//calling the function
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;//to stop the application
  });
