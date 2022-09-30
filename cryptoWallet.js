// Generating a Bitcoin Wallet
const { generateWallet, Currency } = require("@tatumio/tatum");

const bitcoinWallet =  async() => {
    const bitcoinWallet = await generateWallet(Currency.BTC, false);
    console.log(bitcoinWallet);
}

bitcoinWallet();
