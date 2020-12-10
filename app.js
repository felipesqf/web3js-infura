// const { url } = require("inspector");
let Web3 = require("web3");
let url_infura = "https://mainnet.infura.io/v3/489fa9bf01b84e339374b0d440d0be6d";

//create a new instance
let web3 = new Web3(url_infura);

// console.log(web3);

let address = "0x742d35Cc6634C0532925a3b844Bc454e4438f44e"

//get account bbalance
web3.eth.getBalance(address, (error, balance) =>{
    if(!error){
        console.log(web3.utils.fromWei(balance, 'ether'))
    }
    else{
        console.log(error)
    }
});
//get block number (it return a promise)
web3.eth.getBlockNumber().then(res => console.log("the current block is: " + res))

//get the block info/// you need to pass the block or 'latest' or 'pending' for ne next block as string// it also return a promise
web3.eth.getBlock('latest').then(block => console.log(block))

//get transaction hash from the block
web3.eth.getTransactionFromBlock(11425456, 2).then(trans => console.log(trans))
//create wallet
let wallet = web3.eth.accounts.wallet.create(1, 'myWallet');
console.log(wallet[0])