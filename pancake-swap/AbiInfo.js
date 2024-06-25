//application binary interface to interact with contracts
// Info about to which function to have to communicated with in different 
// contracts like factory contract, Router contract etc  

const erc20ABI=["function decimals() public view returns (uint8)"] //abi to interact with erc-20 and provide decimal places to your token

//it will return the address of liquidty pool contract
//0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16 for BUSD and WBNB
const factoryABI=[
    "function getPair(address tokenA, address tokenB) external view returns (address pair)"
]

const pairABI=[
    "function token0() external view returns (address)",
    "function token1() external view returns (address)",
    "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)"
]


//router contract used for price switch and all
const routerABI=[
    "function getAmountsOut(uint amountIn, address[] memory path) public view returns (uint[] memory amounts)"
]

module.exports = { erc20ABI, factoryABI, pairABI, routerABI };