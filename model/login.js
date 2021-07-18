const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";
var passwordHash = require('password-hash');

const client = new MongoClient(uri)

const dbName = 'web-data'

async function main(user, callback) {
    await client.connect()
    console.log("connect succesful for sign up form\n");
    const db = client.db(dbName)
    const collection = db.collection('userData')
    const insertOperation = await collection.insertOne({
        "username": user.email,
        "password": passwordHash.generate(user.password)
    }, callback(null, ({
        err: false
    })))
    console.log('hey you, someone signed up', insertOperation)
}

const signUp = (user, callback) => {
    main(user, callback)
        .then(console.log(user.email))
        .catch(console.error)
        .finally(() => client.close())
}

module.exports.signUp = signUp;

async function main2(user, callback) {
    await client.connect()
    console.log("connect succesful for sign in form\n");
    const db = client.db(dbName)
    const collection = db.collection('userData')
    const findOperation = await collection.findOne({
        "username": user.email,
    });
    // console.log(findOperation);
    if (findOperation) {
        if (passwordHash.verify(user.password, findOperation.password)) {
            console.log("password verified for log in");
            callback(null, {
                success: true,
                email: user.email,
                name: findOperation.name,
            })
        }
        else {
            console.error("password verification failed for login");
            callback(null, {
                success: false,
                message: "Password is invalid"
            })
        }
    }
    else {
        console.error("invalid user email");
        callback(null, {
            success: false,
            message: "User email is valid"
        })
    }
}

const logIn = (user, callback) => {
    main2(user, callback)
        .then(console.log(user.email))
        .catch(console.error)
        .finally(() => client.close())
}

module.exports.logIn = logIn;