// Getting an Address
const data = require('./config')
const { Currency, generateAddressFromXPub } = require("@tatumio/tatum");

const bitcoinXpub = data[0].xpub
const bitcoinAddress = generateAddressFromXPub(Currency.BTC, false, bitcoinXpub, 2);

console.log(bitcoinAddress)