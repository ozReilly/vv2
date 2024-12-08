
import * as bip39 from 'bip39';

import { TezosToolkit } from '@taquito/taquito';
import { InMemorySigner, importKey } from '@taquito/signer';

// 通过助记词生成以太坊相关信息
const TezosInfo = async (mnc?: string) => {
    const mnoc = mnc ? mnc : bip39.generateMnemonic()

    // Step 1: 使用助记词生成 Spending Key
    const spendingKey = await InMemorySpendingKey.fromMnemonic(mnoc);

    // 获取私钥和公钥
    const privateKey = spendingKey.getProvingKey(); // 私钥
    const publicKey = spendingKey.publicKey(); // 公钥

    // 获取 Tezos 地址
    const tezosAddress = spendingKey.publicKeyHash(); // Tezos 地址

    // 打印私钥、公钥、地址
    console.log('Private Key:', privateKey);
    console.log('Public Key:', publicKey);
    console.log('Tezos Address:', tezosAddress);

    return {
        mnoc,
        privateKey,
        publicKey,
        address: tezosAddress
    }
}
export { TezosInfo }