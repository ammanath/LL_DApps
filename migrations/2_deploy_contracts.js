var ApprovalContract = artifacts.require("ApprovalContract");
var SimpleStorageContract = artifacts.require("SimpleStorage");

module.exports = function(deployer){
    deployer.deploy(ApprovalContract);
    deployer.deploy(SimpleStorageContract);
}