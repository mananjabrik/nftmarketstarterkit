require('@nomiclabs/hardhat-waffle');

const projectId = 'infuraprojectid';
const fs = require('fs');
const keyData = fs.readFileSync('.secret', {
  encoding: 'utf8',
  flag: 'r',
});

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337, // config standart localhost
    },
    //bsc testnet
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [keyData],
    },
    //bsc mainnet
    bscmainet: {
      url: 'https://bsc-dataseed.binance.org/',
      chainId: 56,
      accounts: [keyData],
    },
    //eth testnet ropsten
    ropsten: {
      url: `https://ropsten.infura.io/v3/${projectId}`,
      accounts: [keyData],
    },
    //eth testnet mumbai
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [keyData],
    },
    //mainnet eth
    mainnet: {
      url: `https://mainnet.infura.io/v3/${projectId}`,
      accounts: [keyData],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
