// To fetch price

const ethers = require('ethers');
const {
    factoryAddress,
    routerAddress,
    fromAddress,
    toAddress
} = require("./AddressList")

const {erc20ABI, factoryABI, pairABI, routerABI}= require("./AbiInfo");

//provider to read from the blockchain as we have to read for blockchain
const provider = new ethers.providers.JsonRpcProvider(
    "https://bsc-dataseed1.binance.org/"
)

const factoryInstance = new ethers.Contract(
    factoryAddress,factoryABI,provider
)
// console.log(factoryInstance)
const routerInstance=new ethers.Contract(
    routerAddress,routerABI,provider
)

const priceFetch=async(humanFormat)=>{
  const token1 = new ethers.Contract(
    fromAddress,erc20ABI,provider
  )
  const token2 = new ethers.Contract(
    toAddress,erc20ABI,provider
  )
  const decimal1= await token1.decimals()//both token have 18 decimals
  const decimal2= await token2.decimals()
  const amountIn = ethers.utils.parseUnits(humanFormat,decimal1).toString();//converting the humanFormat to busd that is transfer 
  const amountsOut = await routerInstance.getAmountsOut(amountIn,[
    fromAddress,
    toAddress
  ])
  const humanOutput = ethers.utils.formatUnits(
    amountsOut[1].toString(),
    decimal2
  )// convert that toAddress i.e, WBNB to humanOutput
  console.log("This the number of WBNB: ",humanOutput)
}
humanFormat="1000"
priceFetch(humanFormat)