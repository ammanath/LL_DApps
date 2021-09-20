var ApprovalContract = artifacts.require("ApprovalContract");
var SimpleStorageContract = artifacts.require("SimpleStorage");
var HelloWorldContract = artifacts.require("HelloWorld");

module.exports = function (deployer) {
    deployer.deploy(ApprovalContract);
    deployer.deploy(SimpleStorageContract);
    deployer.deploy(HelloWorldContract);
}
