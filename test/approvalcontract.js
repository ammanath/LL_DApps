const ApprovalContract = artifacts.require('../../contracts/ApprovalContract.sol');

contract('ApprovalContract', function (accounts) {

    it('initiates contract', async function () {
        const contract = await ApprovalContract.deployed();
        const approver = await contract.approver.call();
        assert.equal(approver, 0x0Ecfbbbdb2318779a0b0498e81367B8Dd082d666, "approvers don't match");
    });
    it('takes a deposit', async function () {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], {
            value: 1e+18,
            from: accounts[1]
        });
        assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amount did not match");
    });
    it('makes the transaction when approved, approver: ' + accounts[2], async function () {
        const contract = await ApprovalContract.deployed();
        await contract.deposit(accounts[0], {
            value: 1e+18,
            from: accounts[1]
        });
        await contract.approve({from: accounts[2]});
        assert.equal(web3.eth.getBalance(contract.address), 0, "didn't transfer ether");
    });

});
