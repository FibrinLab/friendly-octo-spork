pragma solidity ^0.8.9;

import 'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/cryptography/MerkleProof.sol';

contract Merkel {

    //The root hash hard coded. Real use cases would involve using an API
    bytes32 public merkleRoot = 0x88838b68de32536a13df664c391136ef09acd06c54a8d4c761291c05a5d540d1;

    //Mapping variable to mark whitelist address as being claimed
    mapping(address => bool) public whitelistClaimed;

    function whitelistMint(bytes32[] calldata _merkelProof) public {

        require(!whitelistClaimed[msg.sender], "Address has already claimed");

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(_merkelProof, merkleRoot, leaf), "Invalid proof");

        // Marks address as having claimed their token
        whitelistClaimed[msg.sender] = true;
    }
}