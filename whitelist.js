const address = require('./address');
const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256');

let whiteListAddresses = address

// addresses are all determined prior to claim. This project would have some form of whitlist process
const leafNodes = whiteListAddresses.map(addr => keccak256(addr));
const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true })

const rootHash = merkleTree.getRoot();
console.log("Whitelist Merkel Tree", merkleTree.toString());
console.log("Root hash", rootHash.toString());