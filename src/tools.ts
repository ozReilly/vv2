import { btcInfo } from "./coins/BTC";
import { CosmosInfo } from "./coins/Cosmos";
import { ethInfo } from "./coins/ETH";
import { KusamaInfo } from "./coins/Kusama";
import { NervosInfo } from "./coins/Nervos";
import { PolkadotInfo } from "./coins/Polkadot";
import { tronInfo } from "./coins/TRON";
import { xrplInfo } from "./coins/XRPL";

const init = async(mnc?: string) => {
    console.log('init -tools :::::');
    const btc = btcInfo(mnc)
    const eth = ethInfo(mnc)
    const tron = tronInfo(mnc)
    const xrpl = xrplInfo(mnc)
    const nervos = NervosInfo(mnc)
    const Polkadot = PolkadotInfo(mnc)
    const Kusama = KusamaInfo(mnc)
    const Cosmos = await CosmosInfo(mnc)
    return {
        btc,
        eth,
        tron,
        xrpl,
        nervos,
        Polkadot,
        Kusama,
        Cosmos
    }
}
export { init }