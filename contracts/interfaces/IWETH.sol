// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

interface IWETH {
    event Deposit(address indexed sender, uint256 amount);
    event Withdraw(address indexed sender, uint256 amount);

    function deposit() external payable;

    function withdraw(uint256 _amount) external;
}
