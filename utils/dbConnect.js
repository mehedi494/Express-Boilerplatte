function dbConnect() {
    //     const { MongoClient, ServerApiVersion } = require('mongodb');
    //     const ObjectId = require('mongodb').ObjectId

    //     const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9hokh.mongodb.net/?retryWrites=true&w=majority`;

    //     const client = new MongoClient(uri, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         serverApi: ServerApiVersion.v1
    //     });
    //     console.log("Db Connected");
    //     return {
    //        client, ObjectId
    //     }
    console.log("db connected")
}

module.exports = dbConnect;