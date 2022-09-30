// Getting a Private Key
const data = require('./config')
const { Currency, generatePrivateKeyFromMnemonic } = require("@tatumio/tatum");

const bitcoinPrivateKey = async() => {
    const bitcoinAddress = data[1].address
    const bitcoinPrivateKey = await generatePrivateKeyFromMnemonic(Currency.BTC, false, bitcoinAddress, 1);
    console.log(bitcoinPrivateKey)
}

bitcoinPrivateKey();

