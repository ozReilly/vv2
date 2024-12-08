
import * as bip39 from 'bip39';

import * as bitcoin from 'bitcoinjs-lib';
console.log('bitcoin-lib', bitcoin)
import * as ecc from 'tiny-secp256k1';
import BIP32Factory from 'bip32';
const bip32 = BIP32Factory(ecc)

const LitecoinInfo = (mnc?: string) => {
    console.log('bip39', bip39);
    const mnoc = mnc ? mnc : bip39.generateMnemonic()
    console.log('mnoc:', mnoc);
    const seed = bip39.mnemonicToSeedSync(mnoc)
    const node = bip32.fromSeed(seed)
    console.log('account---------',node)
    const pubkeyB = Buffer.from(node.publicKey)
    const privkeyB = Buffer.from(node.privateKey!)
    const privkey = privkeyB.toString('hex')
    const pubkey = pubkeyB.toString('hex')
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
export { LitecoinInfo }