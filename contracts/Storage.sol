// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Storage {
    string public data;

    function storedata(string memory _data) public {
        data = _data;
    }

    function getdata() public view returns (string memory) {
        return data;
    }
}
