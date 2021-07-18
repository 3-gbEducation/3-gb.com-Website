const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'web-data';

const addSubscriber = (user, callback) => {
    try {
        client.connect((err, client) => {
            if (err) {
                callback(null, {
                    error: true,
                    message: err
                })
            }
            const db = client.db(dbName);
            try {
                db.collection('subscriber-mail-list').insertOne({
                    "email": user.email,
                    "date": new Date()
                }, function (err, inserted) {
                    if (err) {
                        console.log("Error from adding subscriber", err);
                        callback(null, {
                            success: false,
                            err
                        })
                    }
                    else {
                        console.log("congratulations, added a new subscriber", inserted);
                        // console.log(user.);
                        callback(null, {
                            success: true,
                            message: "new user subscribed",
                            // email: inserted.ops.email,
                        })
                    }
                })
            }
            catch (err) {
                console.error("Heads up!cannot subscribe", err);
                callback(null, {
                    success: false,
                    message: err
                })
            }

        });
    }
    catch (err) {
        console.error("some error from subscribe function", err);
        callback(err, null);
    }
    // perform actions on the collection object
    client.close();
}

module.exports.addSubscriber = addSubscriber;