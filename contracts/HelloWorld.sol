// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {
  bool private initialized;

  string private lastName;
  address payable public owner;

  event Greeted(string);


  function initialize(address ownerAddress) public {
    require(!initialized, "CONTRACT_HAS_ALREADY_BEEN_INITIALIZED");
    initialized = true;

    owner = payable(ownerAddress);
  }

  function setLastName(string memory name) public {
    require(bytes(name).length > 0, "EMPTY_NAME");

    if (keccak256(abi.encodePacked(name)) == keccak256(abi.encodePacked("frieza"))) {
      revert("FRIEZA_IS_NOT_WELCOMED");
    }

    lastName = name;
  }

  function getLastName() public view returns (string memory name) {
    return lastName;
  }

  function greet(string memory name) public returns (string memory greetingMessage, string memory greetedName) {
    string memory greeting = string(abi.encodePacked("Hello ", name));
    setLastName(name);
    emit Greeted(name);
    return (greeting, name);
  }
}
