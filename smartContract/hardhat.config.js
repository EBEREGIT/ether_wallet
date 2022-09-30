require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/dUs1CK-PSJSFMUNc5HTYvlqD7HcPPunp',
      accounts: ['2a927c6e148fd779ce4c536e2d60a63a03d6695033785d5b50a5f140108ffaca']
    }
  }
};
