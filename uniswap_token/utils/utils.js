import {ethers} from 'ethers'

//use this internal;y in the function
export function toWei(amount, decimals = 18) {
    const toWei = ethers.utils.parseUnits(amount, decimals)
    return toWei.toString()
}

//use this to display the value in the frontend
export function toEth(amount, decimals = 18) {
    const toEth = ethers.utils.formatUnits(amount, decimals)
    return toEth.toString()
}