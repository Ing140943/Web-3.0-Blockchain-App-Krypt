// https://eth-ropsten.alchemyapi.io/v2/Pt_Jki4J9Gu8vaZIBhQhOJlfZerrSURw

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.7',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/Pt_Jki4J9Gu8vaZIBhQhOJlfZerrSURw',
      accounts: ['1ec05599fc35949d106509e8ba9d53ed774631dad765adefc04b4f31aefdfea5']
    }
  } 
}