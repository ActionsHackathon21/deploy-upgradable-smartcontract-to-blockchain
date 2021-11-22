const HelloWorld = artifacts.require('HelloWorld')
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades')
const fs = require('fs')

module.exports = async function (deployer, network, accounts) {
  if(!process.env.DEPLOYED_ADDRESS) {
    try {
      console.log('Deploying')
      const contract = await deployProxy(HelloWorld, [accounts[0]], {
        deployer,
        initializer: 'initialize'
      })
  
      console.log('Deployed', contract.address)
  
      fs.writeFileSync(__dirname + '/../build/README.md', `
  **Deployed Address:** [${contract.address}](https://contract.mph.am/?json=https://raw.githubusercontent.com/${process.env.GITHUB_REPOSITORY}/${process.env.DEPLOY_BRANCH}/build/contracts/HelloWorld.json)
      `)
      fs.writeFileSync(__dirname + '/../build/DEPLOYED_ADDRESS.txt', contract.address)
    } catch (err) {
      console.log('Deploy failed', err)
    }
  }
}