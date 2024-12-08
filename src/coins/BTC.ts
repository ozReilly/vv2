
import * as bip39 from 'bip39';

import * as bitcoin from 'bitcoinjs-lib';
console.log('bitcoin-lib', bitcoin)
import * as ecc from 'tiny-secp256k1';
import BIP32Factory from 'bip32';
const bip32 = BIP32Factory(ecc)

const btcInfo = (mnc?: string) => {
    console.log('bip39', bip39);
    const mnoc = mnc ? mnc : bip39.generateMnemonic()
    console.log('mnoc:', mnoc);
    const seed = bip39.mnemonicToSeedSync(mnoc)
    const node = bip32.fromSeed(seed)
    // const account = root.derivePath("m/44'/0'/0'/0/0");
    console.log('account---------',node)
    const pubkeyB = Buffer.from(node.publicKey)
    const privkeyB = Buffer.from(node.privateKey!)
    const privkey = privkeyB.toString('hex')
    const pubkey = pubkeyB.toString('hex')
    // const path = "m/49'/1'/0'/0/0";
    // const child = node.derivePath(path);
    // const pubkey2 = Buffer.from(account.publicKey).toString('hex')
    const address = bitcoin.payments.p2pkh({ pubkey: pubkeyB }).address!
    const p2wpkh = bitcoin.payments.p2wpkh({ pubkey: pubkeyB}).address!
    return {
        mnoc,
        privkey,
        pubkey,
        address,
        p2wpkh
    }
}
export { btcInfo }