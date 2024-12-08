
import * as bip39 from 'bip39';

import * as bitcoin from 'bitcoinjs-lib';
console.log('bitcoin-lib', bitcoin)
import * as ecc from 'tiny-secp256k1';
import BIP32Factory, { BIP32Interface } from 'bip32';

const btcInfo = (mnc?: string) => {
    console.log('bip39', bip39);
    const mnoc = mnc ? mnc : bip39.generateMnemonic()
    console.log('mnoc:', mnoc);
    const seed = bip39.mnemonicToSeedSync(mnoc)
    const bip32 = BIP32Factory(ecc)
    const root = bip32.fromSeed(seed)
    const account = root.derivePath("m/44'/0'/0'/0/0");
    const privkey = (account.privateKey as Buffer)?.toString('hex')
    const pubkey = (account.publicKey as Buffer).toString('hex')
    // const pubkey2 = Buffer.from(account.publicKey).toString('hex')
    const address = bitcoin.payments.p2pkh({ pubkey: (account.publicKey as Buffer) }).address!
    const p2wpkh = bitcoin.payments.p2wpkh({ pubkey: (account.publicKey as Buffer) }).address!
    return {
        mnoc,
        privkey,
        pubkey,
        address,
        p2wpkh
    }
}
export { btcInfo }