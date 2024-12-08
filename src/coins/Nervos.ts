
import * as bip39 from 'bip39';

import { hd, config, helpers } from '@ckb-lumos/lumos';
const { ExtendedPrivateKey, AddressType } = hd;


const getAddressByPrivateKey = (privateKey: string) => {
    const args = hd.key.privateKeyToBlake160(privateKey);
    const template = config.predefined.AGGRON4.SCRIPTS["SECP256K1_BLAKE160"]!;
    const lockScript = {
      codeHash: template.CODE_HASH,
      hashType: template.HASH_TYPE,
      args: args,
    };
  
    return helpers.encodeToAddress(lockScript);
  }
const NervosInfo = (mnc?: string) => {
    // 从助记词生成种子
    const mnoc = mnc ? mnc : bip39.generateMnemonic()

    // 通过助记词生成种子
    const seed = bip39.mnemonicToSeedSync(mnoc);
    const extendedPrivKey = ExtendedPrivateKey.fromSeed(seed);
    console.log('NervosInfo', extendedPrivKey);

    // 通过种子生成私钥
    const info = extendedPrivKey.privateKeyInfo(AddressType.Receiving, 0)
    const privateKey = info.privateKey

    // 使用私钥生成公钥和地址
    const publicKey = info.publicKey;
    const address = getAddressByPrivateKey(privateKey);

    return {
        mnoc,
        privateKey,
        publicKey,
        address
    }
}
export { NervosInfo }