const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://pseelam:welcome123@cluster0.q6nif.mongodb.net/web-data?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'web-data';

const addBooking = (user, callback) => {
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
                db.collection('demo-class-form-data').insertOne({
                    "name" : user.name,
                    "mobile" : user.mobile,
                    "email": user.email,
                    "board" : user.board,
                    "class" : user.class,
                    "subject" : user.subject,
                    "language" : user.language,
                    "days" : user.days,
                    "time" : user.time,
                    "budget" : user.budget,
                    "requirements" : user.requirements,
                    "date": new Date(),

                }, function (err, inserted) {
                    if (err) {
                        console.log("Error booking class", err);
                        callback(null, {
                            success: false,
                            err
                        })
                    }
                    else {
                        console.log("congratulations, booked a new class", inserted);
                        // console.log(user.);
                        callback(null, {
                            success: true,
                            message: "new class booked",
                            // email: inserted.ops.email,
                        })
                    }
                })
            }
            catch (err) {
                console.error("Heads up!cannot book a class", err);
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

module.exports.addBooking = addBooking;