const ethers = require('ethers');
const crypto = require('crypto');

const addresses = [];
const generateAddress = () => {
    for (let i = 0; i < 11; i++) {
        var id = crypto.randomBytes(32).toString('hex');
        var privateKey = "0x" + id;
        // console.log("Do not share", privateKey);

        var wallet = new ethers.Wallet(privateKey);
        var add = wallet.address
        // console.log("Address", add)

        addresses.unshift(add)
        console.log(addresses)
    }
}

generateAddress()

// module.exports = generateAddress;
module.exports = addresses;



