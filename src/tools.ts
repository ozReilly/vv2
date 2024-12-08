import { btcInfo } from "./coins/BTC";
import { ethInfo } from "./coins/ETH";
import { NervosInfo } from "./coins/Nervos";
import { PolkadotInfo } from "./coins/Polkadot";
import { tronInfo } from "./coins/TRON";
import { xrplInfo } from "./coins/XRPL";

const init = (mnc?: string) => {
    console.log('init -tools :::::');
    const btc = btcInfo(mnc)
    const eth = ethInfo(mnc)
    const tron = tronInfo(mnc)
    const xrpl = xrplInfo(mnc)
    const nervos = NervosInfo(mnc)
    const Polkadot = PolkadotInfo(mnc)
    return {
        btc,
        eth,
        tron,
        xrpl,
        nervos,
        Polkadot
    }
}
export { init }