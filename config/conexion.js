var mongoose = require('mongoose');
console.log('llega');
var connection = mongoose.connect("mongodb+srv://Daniel1:kjCPSdHa4ufWHVfi@cluster0.niwzw.mongodb.net/Sistema?retryWrites=true&w=majority");

mongoose.connection.on('open',(ref)=>{
    console.log("conectado a mongo");

});
module.exports=connection;