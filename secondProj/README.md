# LinkedIn Learning
Course by Michael Solomon on DataTypes in Solidity


Commands to execute
> truffle init
//Write the contract code, set up migration script and then compile in VSCode
> truffle deploy --reset
> truffle console
truffle(development)> DataTypes.deployed().then(function(instance){return instance});
truffle(development)> DataTypes.deployed().then(function(instance){return instance.getStateVariables()});

