// const { url } = require("inspector");
let Web3 = require("web3");
let url_infura = "wss://mainnet.infura.io/ws/v3/489fa9bf01b84e339374b0d440d0be6d";

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

//create wallet
let wallet = web3.eth.accounts.wallet.create(1, 'myWallet');
console.log(wallet[0])