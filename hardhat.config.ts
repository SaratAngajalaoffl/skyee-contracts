import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.17",
    networks: {
        ganache: {
            url: "http://127.0.0.1:8545",
            accounts: {
                mnemonic: process.env.GANACHE_MNEMONIC,
            },
        },
        mumbai: {
            url: "https://rpc-mumbai.matic.today",
            accounts: {
                mnemonic: process.env.GANACHE_MNEMONIC,
            }
        }
    },
};

export default config;
