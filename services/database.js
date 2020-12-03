  
const mongoose = require('mongoose')

const connectToDatabase = () =>{
    mongoose
        .connect("mongodb://admin:admin2020@cluster0-shard-00-00.hqulw.mongodb.net:27017,cluster0-shard-00-01.hqulw.mongodb.net:27017,cluster0-shard-00-02.hqulw.mongodb.net:27017/KpopMerchDB?ssl=true&replicaSet=atlas-2ttdyd-shard-0&authSource=admin&retryWrites=true=majoritymongodb://admin:<password>@cluster0-shard-00-00.hqulw.mongodb.net:27017,cluster0-shard-00-01.hqulw.mongodb.net:27017,cluster0-shard-00-02.hqulw.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-2ttdyd-shard-0&authSource=admin&retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        .then(()=>{
            console.log("Connected to the database");
        })
        .catch((error)=> console.log(error));
}

module.exports = {
    connect: connectToDatabase
};