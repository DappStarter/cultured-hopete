require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember assume idea close bone gate'; 
let testAccounts = [
"0x9a28b903a76006e27e91de8874859401893090349ff3b2ca32cedcc31a65e95b",
"0x7a3401d18a2730e4d0ce1f6bac489e8482357cf883d3d46bf97b99a95f33cd96",
"0x9a78a2909d9b5ec6323169b6b8bac2620219c97d2a5f93492de695114295c1fd",
"0xc66501534750c2882911db2aee0f5cbb5b680d4b4d76c8973ccf0726c4ad60a9",
"0x0734aea4da75d71c7ad428dde66b63f476c6c7ec7afa246debb269673f8b6e6b",
"0x7d411650ddc5590037a298d8559b6a0e0f20352f76cd0e85787cbee4248bb844",
"0x1a495d9ffc4e09308278f81b5ee937d3042d7e635c670f28cff613b8def10927",
"0x1948ecd067be565f2261abad65ac52cca3a7426432757059bfb3cefcd7ab4992",
"0x1b7c85c785d74247204ca9ad0220243ffbc25363ea921a847f04f6a5c0848ea5",
"0x427dfe47140875e6474246297df57cca1edd5e6edf8e8715584ed718c906420b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
