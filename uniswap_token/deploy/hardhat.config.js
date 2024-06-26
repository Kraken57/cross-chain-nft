require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_POLYGON_MUMBAI_RPC = "https://polygon-mumbai.api.onfinality.io/public";
//https://rpc.ankr.com/polygon_mumbai
const NEXT_PUBLIC_PRIVATE_KEY =
  "05f9e1be06f064b133b008a94aa0506e2b22b384d15552adcf4029c9ed2a8d37";
// e796fea1150bf497276a52b963e9e0e2903ea774bc187863f4b2dc8438221165
// 05f9e1be06f064b133b008a94aa0506e2b22b384d15552adcf4029c9ed2a8d37   my
module.exports = {
  solidity: "0.8.0",
  defaultNetwork: "matic",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: NEXT_PUBLIC_POLYGON_MUMBAI_RPC,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
    },
  },
};
