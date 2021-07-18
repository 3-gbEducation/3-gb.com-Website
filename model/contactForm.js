const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'web-data';

const sendMessage = (user, callback) => {
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
                db.collection('contact-form-data').insertOne({
                    "name" : user.name,
                    "email": user.email,
                    "subject" : user.subject,
                    "message" : user.message,
                    "date": new Date(),

                }, function (err, inserted) {
                    if (err) {
                        console.log("Error receiving message", err);
                        callback(null, {
                            success: false,
                            err
                        })
                    }
                    else {
                        console.log("hey, you have a new message", inserted);
                        // console.log(user.);
                        callback(null, {
                            success: true,
                            message: "new message sent",
                            // email: inserted.ops.email,
                        })
                    }
                })
            }
            catch (err) {
                console.error("Heads up!cannot send a message", err);
                callback(null, {
                    success: false,
                    message: err
                })
            }

        });
    }
    catch (err) {
        console.error("some error from message function", err);
        callback(err, null);
    }
    // perform actions on the collection object
    client.close();
}

module.exports.sendMessage = sendMessage;