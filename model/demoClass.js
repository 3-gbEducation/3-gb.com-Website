const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";

const client = new MongoClient(uri)

const dbName = 'web-data'

async function main(user, callback) {
    await client.connect()
    console.log("connect succesful for demo form\n");
    const db = client.db(dbName)
    const collection = db.collection('demo-class-form-data')
    const insertOperation = await collection.insertOne({
        "name": user.name,
        "mobile": user.mobile,
        "email": user.email,
        "board": user.board,
        "class": user.class,
        "subject": user.subject,
        "language": user.language,
        "days": user.days,
        "time": user.time,
        "budget": user.budget,
        "requirements": user.requirements,
        "date": new Date(),
    },
        callback(null, ({
            err: false
        })
        )
    )
    console.log('hey you, there\'s a new class booking', insertOperation)
}

const addBooking = (user, callback) => {
    main(user, callback)
        .then(console.log("user.email"))
        .catch(console.error)
        .finally(() => client.close())
}

module.exports.addBooking = addBooking;