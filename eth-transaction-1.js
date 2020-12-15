const Tx = require("ethereumjs-tx");
const { serialize } = require("v8");
let Web3 = require("web3");
//ropsten testnet
let url_infura = "https://ropsten.infura.io/v3/489fa9bf01b84e339374b0d440d0be6d";

//create a new instance
let web3 = new Web3(url_infura);

/// transfer between 2 accounts
// console.log(web3.eth.accounts.create())
// console.log(web3.eth.accounts.create())

const accountOne = "0x3fE5b3dB034620D6eC5cD66219f9f48e6a8459C0";
const privateKeyOne = Buffer.from('0x30d05b4ca4605fa0c7e096baf41d46c90e92be70b96dab9b3827e7a41868556a', 'hex',)
const accountTwo = "0x242a7F38D18b013770d5120ACB45605df9eC6762";

web3.eth.getBalance(accountTwo, (err, res) => console.log(res))

//get nounce
webb3.eth.getTransactionCount(accountOne, (err, txCount) =>{
    //build transaction object 
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: accountTwo,
        value: web3.utils.toHex(web3.utils.toWei('0.3', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', "gwei"))
    }
    console.log(txObject)

    //sign transaction with private jey of the sender
    const tx = new Tx(txObject)
    tx.sign(privateKeyOne)

    //serialize the transaction
    const serializeTx = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')


    // broadcast the transaciton to the network
    web3.eth.sendSignedTransaction(raw, (err, resp) => console.log(resp))


})

