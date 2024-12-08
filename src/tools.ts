import { btcInfo } from "./coins/BTC";
import { ethInfo } from "./coins/ETH";
import { tronInfo } from "./coins/TRON";
import { xrplInfo } from "./coins/XRPL";

const init = (mnc?:string) => {
    console.log('init -tools :::::');
   const btc =  btcInfo(mnc)
   const eth = ethInfo(mnc)
   const tron = tronInfo(mnc)
   const xrpl = xrplInfo(mnc)
    return {
        btc,
        eth,
        tron,
        xrpl
    }
}
export {init}