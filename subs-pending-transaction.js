
let Web3 = require("web3");
//web socket to subscribe to a new blcok
let ws = "wss://mainnet.infura.io/ws/v3/489fa9bf01b84e339374b0d440d0be6d"

//create a new instance
let web3 = new Web3(ws);

web3.eth.subscribe('pendingTransactions', (err, txhash) => {
    if(!err){
        web3.eth.getTransaction(txhash, (error, tx) =>{
            if(tx!=null ){
                // console.log(tx)
                if(tx.value >= 1000000000000000000){
                    //print hash and value of a pending transaction
                    console.log(txhash)
                    console.log(web3.utils.fromWei(tx.value, 'ether'), 'Ether')
                }
            }
        })
    }
    else{
        console.log(err)
    }
})