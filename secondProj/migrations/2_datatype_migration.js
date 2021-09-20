const DataTypeContract = artifacts.require("DataTypes");

module.exports = function (deployer) {
    deployer.deploy(DataTypeContract);
};
