const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";

const client = new MongoClient(uri)

const dbName = 'web-data'

async function main(user,callback){
    await client.connect()
    console.log("connect succesful for contact form\n");
    const db = client.db(dbName)
    const collection = db.collection('subscriber-mail-list')
    const insertOperation = await collection.insertOne({
        email : user.email,
        date : new Date()
    },
    callback(null,({
        err : false
    })
    )
    )
    console.log('hey you, this is a new subscriber alert!', insertOperation)
}

const addSubscriber = (user,callback) =>{
    main(user,callback)
    .then(console.log(user.email))
    .catch(console.error)
    .finally(() => client.close())
}

module.exports.addSubscriber = addSubscriber;