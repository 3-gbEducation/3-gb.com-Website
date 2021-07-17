var mongoose = require("mongoose");
var SubscriberMail=({
    email:String,
    date:String,
});

module.exports = mongoose.model("Subscribe",SubscriberMail);