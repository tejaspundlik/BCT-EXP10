// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract bmc {
    struct coffee {
        address sender;
        string message;
        uint256 timestamp;
    }

    uint256 totalCoffee;
    address payable owner;

    event NewCoffee(address indexed sender, string message, uint256 timstamp);

    constructor() {
        owner = payable(msg.sender);
    }

    function buyCoffee(string memory _message) public payable {
        require(msg.value > 0, "Tip must be greater then zero");
        totalCoffee += 1;
        payable(owner).transfer(msg.value);
        emit NewCoffee(msg.sender, _message, block.timestamp);
    }

    function getTotalCoffee() public view returns (uint256) {
        return totalCoffee;
    }
}
