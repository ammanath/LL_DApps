pragma solidity ^0.5.0;

//A Simple Smart Contract to demonstrate simple data types available in Solidity

contract DataTypes {
    uint256 x = 9; //256 bytes
    int256 i = -68; //can store negatives
    uint8 j = 17; //8 bytes
    bool isEthereumCool = true;
    address owner = msg.sender;
    bytes32 bMsg = "hello";
    string sMsg = "hello";

    function getStateVariables()
        public
        view
        returns (
            uint256,
            int256,
            uint256,
            bool,
            address,
            bytes32,
            string memory
        )
    {
        return (x, i, j, isEthereumCool, owner, bMsg, sMsg);
    }

    function setbMsg(bytes32 newValue) private returns (bytes32) {
        bMsg = newValue;
    }
}
