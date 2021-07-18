const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";
var passwordHash = require('password-hash');

const client = new MongoClient(uri)

const dbName = 'web-data'

async function main(user, callback) {
    await client.connect()
    console.log("connect succesful for sign in form\n");
    const db = client.db(dbName)
    const collection = db.collection('user-data')
    const insertOperation = await collection.insertOne({
        "email": user.email,
        "password": passwordHash.generate(user.password)
    }, (err, query) => {
        if (err) {
            console.log("error in sign up\n");
        }
        else {
            console.log("all signed in!", query);
        }
    }
        ,
        callback(null, ({
            err: false
        })
        )
    )
    console.log('hey you, someone signed up', insertOperation)
}

const signUp = (user, callback) => {
    main(user, callback)
        .then(console.log("user.email"))
        .catch(console.error)
        .finally(() => client.close())
}

module.exports.signUp = signUp;

async function main(user, callback) {
    await client.connect()
    console.log("connect succesful for sign in form\n");
    const db = client.db(dbName)
    const collection = db.collection('user-data')
    const findOperation = await collection.findOne({
        "email": user.email,
    }, (err, queryresult) => {
        if (passwordHash.verify(user.password, queryresult.password)){
            console.log("yo! authenticated login");
            callback(null, {
                success: true,
                email: user.email,
                name: queryresult.name,
            })
        }
},
callback(null, ({
    err: false
})
)
    )
console.log('hey you, someone signed in', findOperation)
}

const logIn = (user, callback) => {
    main(user, callback)
        .then(console.log("user.email"))
        .catch(console.error)
        .finally(() => client.close())
}

module.exports.logIn = logIn;