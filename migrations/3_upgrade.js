const HelloWorld = artifacts.require('HelloWorld')
 
const { upgradeProxy } = require('@openzeppelin/truffle-upgrades')
 
module.exports = async function (deployer) {
  if(process.env.DEPLOYED_ADDRESS) {
    console.log('Upgrading')
    const contract = await upgradeProxy(process.env.DEPLOYED_ADDRESS, HelloWorld, { 
      deployer
    })
    console.log("Upgraded", contract.address)
  } else {
    console.log('No DEPLOYED_ADDRESS specified')
  }
}