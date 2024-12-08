import { btcInfo } from "./BTC";
import { ethInfo } from "./ETH";

const init = (mnc?:string) => {
    console.log('init -tools :::::');
   const btc =  btcInfo(mnc)
   const eth = ethInfo(mnc)
    return {
        btc,
        eth
    }
}
export {init}