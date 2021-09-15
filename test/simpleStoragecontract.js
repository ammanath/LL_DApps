const SimpleStorageContract = artifacts.require("../../contracts/SimpleStorage.sol");

contract('SimpleStorageContract', function () {

    it('initiates contrat', async function () {
        const contract = await SimpleStorageContract.deployed();
        await contract.set.call(2323);
        const value = contract.get.call();
        assert.equal(value, 2323, "get and set values do not match!");
    });

    // it('takes a deposit', async function () {
    //     const contract = await ApprovalContract.deployed();
    //     await contract.deposit(accounts[0], {
    //         value: 1e+18,
    //         sender: accounts[1]
    //     });
    //     await contract.approve();
    //     assert.equal(web3.eth.getBalance(contract.address), 1e+18, "amount did not match");
    // });

})
