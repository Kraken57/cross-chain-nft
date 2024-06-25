const provider = new ethers.providers.JsonRpcProvider(
  "https://bsc-dataseed1.binance.org/"
);
const factoryAddress = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73"; // Address of pancake factory
const routerAddress = "0x10ED43C718714eb63d5aA57B78B54704E256024E"; // Router contact pancake address v2
const fromAddress = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; // BUSD BEP20Token
const toAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c"; // WBNB

const erc20ABI = ["function decimals() public view returns (uint8)"];
const routerABI = [
  "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)",
];

const routerInstance = new ethers.Contract(routerAddress, routerABI, provider);

document.getElementById("swapButton").addEventListener("click", async () => {
  const humanFormat = document.getElementById("amount").value;
  const resultElement = document.getElementById("result");

  if (humanFormat === "") {
    resultElement.innerText = "Please enter an amount.";
    return;
  }

  try {
    const token1 = new ethers.Contract(fromAddress, erc20ABI, provider);
    const token2 = new ethers.Contract(toAddress, erc20ABI, provider);

    const decimal1 = await token1.decimals(); // both tokens have 18 decimals
    const decimal2 = await token2.decimals();
    const amountIn = ethers.utils.parseUnits(humanFormat, decimal1).toString(); // converting the humanFormat to BUSD that is transfer

    const amountsOut = await routerInstance.getAmountsOut(amountIn, [
      fromAddress,
      toAddress,
    ]);

    const humanOutput = ethers.utils.formatUnits(
      amountsOut[1].toString(),
      decimal2
    ); // convert that toAddress i.e, WBNB to humanOutput

    resultElement.innerText = `This is the number of WBNB: ${humanOutput}`;
  } catch (error) {
    console.error(error);
    resultElement.innerText = "Error fetching the price.";
  }
});
