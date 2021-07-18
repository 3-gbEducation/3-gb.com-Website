const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";

const client = new MongoClient(uri)

const dbName = 'web-data'

async function main(user,callback){
    await client.connect()
    console.log("connect succesful for contact form\n");
    const db = client.db(dbName)
    const collection = db.collection('contact-form-data')
    const insertOperation = await collection.insertOne({
        "name" : user.name,
        "email": user.email,
        "subject" : user.subject,
        "message" : user.message,
        "date": new Date(),
    },
    callback(null,({
        err : false
    })
    )
    )
    console.log('hey you, you have a new message', insertOperation)
}

const sendMessage = (user,callback) =>{
    main(user,callback)
    .then(console.log("user.email"))
    .catch(console.error)
    .finally(() => client.close())
}

module.exports.sendMessage = sendMessage;