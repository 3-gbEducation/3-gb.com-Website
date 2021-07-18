const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";

const client = new MongoClient(uri)

const dbName = 'web-data'

async function main(user,callback){
    await client.connect()
    console.log("connect succesful for contact form\n");
    const collection = db.collection('contact-form-data')
    const insertOperation = await collection.insertOne({
        email : user.email,
        date : new Date()
    })
    console.log('hey you, this is a new subscriber alert!', insertOperation)
}

const sendMessage = (user,callback) =>{
    main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close())
}

module.exports.sendMessage = sendMessage;