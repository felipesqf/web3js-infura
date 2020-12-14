let Web3 = require("web3");
//web socket to subscribe to a new blcok
let ws = "wss://mainnet.infura.io/ws/v3/489fa9bf01b84e339374b0d440d0be6d"
//create a new instance
let web3 = new Web3(ws);

//subbscribe to logs of all smart contracts(second argument passed{})
// web3.eth.subscribe('logs', {}, (err, log) =>{
//     if(!err){
//         console.log(log)
//     }
//     else{
//         console.log(err)
//     }
// })


//chainlink smart contract
web3.eth.subscribe('logs', { address: "0x514910771af9ca656af840dff83e8264ecf986ca" }, (err, log) =>{
    if(!err){
        console.log(log)
    }
    else{
        console.log(err)
    }
})

