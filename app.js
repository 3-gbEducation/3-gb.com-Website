var express = require("express"),
  // mongoose = require("mongoose"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  LocalStrategy = require("passport-local"),
  passportLocalMongoose =
    require("passport-local-mongoose"),
  User = require("./model/user");
Demo = require("./model/demo");
Contact = require("./model/contact");
Subscribe = require("./model/subscribers");

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect("mongodb+srv://newDb:db@12345@cluster0.jnrea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

var app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.use(require("express-session")({
  secret: "Rusty is a dog",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
// app.get('/assets/css/style-starter.css', function(req, res) {
//   res.sendFile(__dirname + "/assets/css/style-starter.css");
// });





app.get("/", function (req, res) {
  res.render(__dirname + "/index");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
  res.render("secret");
});

var logIn = require('./model/login');
//Handling user login
app.post("/login", function (req, res) {
  const user = req.body;
  // console.log(user);
  logIn.logIn(user, (err, data) => {
    if (err) {
      res.json({
        err,
        data
      })
    }
    else if(data.success){
      // alert('successful login!');
      res.redirect('/home');
    }
    else if(!data.success){
      res.json({
        error : true,
        reason : data.message
      })
    }
  })
})

app.get("/signUp",function(req,res){
  res.render(__dirname+('/signUp'))
})

app.get("/home",function(req,res){
  res.render(__dirname+'/welcome')
})

app.post("/signUp",function(req,res){
  const user = req.body;
  logIn.signUp(user,(callback,data)=>{
    if(data.err){
      res.json({
        err, 
        data
      })
    }
    else{
      res.redirect('/home');
    }
  })
})

app.get("/login",function(req,res){
  res.render(__dirname+('/login'))
})

//Handling user logout
app.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/login");
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/login");
}


// Contact Form
app.get("/contact", function (req, res) {
  res.render(__dirname + "/contact")
});

var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Server Has Started!");
});


// ************************* Added by Pradeepa
app.get("/soon", function (req, res) {
  res.render(__dirname + "/blankpage")
});

app.get("/blogs", function (req, res) {
  res.render(__dirname + "/blog")
});

app.get("/about", function (req, res) {
  res.render(__dirname + "/about")
});

app.get("/sampleblog", function (req, res) {
  res.render(__dirname + "/blog-single")
});

app.get("/faq", function (req, res) {
  res.render(__dirname + "/faq")
});

app.get("/reviews", function (req, res) {
  res.render(__dirname + "/reviews")
});

app.get("/latest", function (req, res) {
  res.render(__dirname + "/latest")
});

app.get("/sampleblog-1", function (req, res) {
  res.render(__dirname + "/blog1")
})

app.get("/sampleblog-2", function (req, res) {
  res.render(__dirname + "/blog2")
})

app.get("/sampleblog-3", function (req, res) {
  res.render(__dirname + "/blog3")
})

app.get("/find-tutor", function (req, res) {
  res.render(__dirname + "/tutor")
})

app.get("/team", function (req, res) {
  res.render(__dirname + "/team")
})

app.get("/PrivacyPolicy", function (req, res) {
  res.render(__dirname + "/PrivacyPolicy")
})

app.get("/service", function (req, res) {
  res.render(__dirname + "/service")
})

app.get("/disclaimer", function(req, res){
  res.render(__dirname+ "/disclaimer")
})


var flash = require('connect-flash')
app.use(flash())
var subscriber = require('./model/subscribers')
app.post('/subscribe', (req, res) => {
  const user = req.body;
  subscriber.addSubscriber(user, (err, data) => {
    if (err) {
      res.json({
        err,
        data
      })
    }
    else {
      req.flash('message', 'Success!!');
      res.redirect('/');
    }
  })
})

var FreeClass = require('./model/demoClass')
app.post('/bookclass', (req, res) => {
  const user = req.body;
  FreeClass.addBooking(user, (err, data) => {
    if (err) {
      res.json({
        err,
        data
      })
    }
    else {
      res.redirect('/');
    }
  })
})


var sendMessage = require('./model/contactForm')
app.post('/send', (req, res) => {
  const user = req.body;
  sendMessage.sendMessage(user, (err, data) => {
    if (err) {
      res.json({
        err,
        data
      })
    }
    else {
      res.redirect('/contact');
    }
  })
})
