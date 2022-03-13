require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe strong deny situate color grid kite metal ghost'; 
let testAccounts = [
"0x98d7c9b0b266169b984ccc0a25325832b51901139e7b52bffd7a4ee6491afb35",
"0x30f84d81c004e44ebe6f813286a8fdc291ee4fbfe8360c7c4a5ff935f58e35ea",
"0xbbf460cefab9b9d371b1b80c8e5552337c95c63a5e4e353427e5f02d7fceb637",
"0xdcf8318da5241efd945b6e0600edf8ce79e4a22445de8dbec7b8b8775797716b",
"0xb2276aa31238091a1ee455f06ce1c2b3c0ca1dd18dd65538be31115b1ffa456a",
"0x65deedf9898b055a9824c383de7f0612488146ca3a2278eaecdeb100a59ac05c",
"0x7b5606cf523bd92aec1eaea7061eddd7af02d8a0d62ff0656fe4617cf37d516c",
"0xd6ab4d8b124b3bd2817642c1c8dea1ced6a3cc887d1db7be442dd1bfb41607fc",
"0x04e9b6e483e1e095bef46c9595cad012ecce4835f4a87469125e8fc38ede1ba3",
"0x761720df2edfea1a1f8faf8195aa63d6980c6a9ede3a2df4ee3a3b97fcf11907"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

