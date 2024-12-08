
import * as bip39 from 'bip39';

import { Wallet } from "xrpl";

// 通过助记词生成以太坊相关信息
const xrplInfo = (mnc?:string) => {
    console.log('bip39', bip39);
    const mnoc = mnc?mnc:bip39.generateMnemonic();
    console.log('mnoc:', mnoc);
    const wallet = Wallet.fromMnemonic(mnoc)
    const privateKey = wallet.privateKey //''
    const publicKey = wallet.publicKey
    const address =  wallet.address
    return {
        mnoc,
        privateKey,
        publicKey,
        address
    }
}
export { xrplInfo }