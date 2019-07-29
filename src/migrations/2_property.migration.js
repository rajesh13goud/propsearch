// eslint-disable-next-line no-undef
const Migrations = artifacts.require('./Property.sol');

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
