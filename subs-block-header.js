
let Web3 = require("web3");
//web socket to subscribe to a new blcok
let ws = "wss://mainnet.infura.io/ws/v3/489fa9bf01b84e339374b0d440d0be6d"

//create a new instance
let web3 = new Web3(ws);

web3.eth.subscribe('newBlockHeaders', (error, block)=>{
    if(!error){
        console.log(block)
    }
    else{
        console.log(error)
    }
})
