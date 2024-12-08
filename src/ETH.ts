
import * as bip39 from 'bip39';

// import { HDKey } from 'ethereum-cryptography/hdkey';
// import { keccak256 } from 'ethereum-cryptography/keccak';
// import { bytesToHex } from 'ethereum-cryptography/utils';

import { ethers } from "ethers";

// 通过助记词生成以太坊相关信息
const ethInfo = (mnc?:string) => {
    console.log('bip39', bip39);
    const mnoc = mnc?mnc:bip39.generateMnemonic()
    // 将助记词转换为种子
    const seed = bip39.mnemonicToSeedSync(mnoc);
    console.log('mnoc:', mnoc);
    // // 从种子创建以太坊HD钱包的根节点
    // const hdwallet = HDKey.fromMasterSeed(seed);
    // // 根据以太坊的BIP44路径派生账户
    // const wallet = hdwallet.derive("m/44'/60'/0'/0/0");
    // // 获取私钥并转换为十六进制字符串
    // const privateKeyBuffer = (wallet.privateKey as Buffer);
    // const privateKey = Buffer.from(privateKeyBuffer).toString('hex')
    // // 获取公钥并转换为十六进制字符串
    // const publicKeyBuffer = (wallet.publicKey as Buffer);
    // const publicKey = Buffer.from(publicKeyBuffer).toString('hex');
    // // 对公钥进行Keccak256哈希处理，并取后20字节作为以太坊地址
    // const addressBuffer = keccak256(publicKeyBuffer.slice(1)).slice(-20);
    // const address = `0x${bytesToHex(addressBuffer)}`;
    const wallet = ethers.Wallet.fromPhrase(mnoc)
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
export { ethInfo }