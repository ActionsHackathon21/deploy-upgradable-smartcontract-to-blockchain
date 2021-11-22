const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
  if(!process.env.DEPLOYED_ADDRESS) {
    deployer.deploy(Migrations, {
      overwrite: false
    })
  }
};
