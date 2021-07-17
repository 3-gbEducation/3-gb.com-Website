var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose =
        require("passport-local-mongoose"),
    User = require("./model/user");
    Demo = require("./model/demo");
    Contact = require("./model/contact");

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb+srv://newDb:db@12345@cluster0.jnrea.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

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
    res.render(__dirname +"/index");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

// Showing register form
app.get("/signUp", function (req, res) {
    res.render(__dirname +"/signUp");
});

// Handling user signup
app.post("/signUp", function (req, res) {
    var username = req.body.username
    var password = req.body.password
    User.register(new User({ username: username }),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render(__dirname +"/signUp");
        }

        passport.authenticate("local")(
            req, res, function () {
            res.render("secret");
        });
    });
});

//Showing login form
app.get("/login", function (req, res) {
    res.render(__dirname +"/login");
});

//Handling user login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});

//Handling user logout
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

// DemoClassForm

app.post("/search",function(req,res){
  var name=req.body.name;
  var email=req.body.email;
  var mobile=req.body.mobile;
  var board=req.body.board;
  var subject=req.body.subject;
  var day=req.body.day;
  var time=req.body.time;
  var language=req.body.language;
  var budget=req.body.budget;
  var requirement=req.body.requirement;
  // var errors=req.validationErrors();
  // if(!errors){
    const demo=new Demo({
      name:name,
      email:email,
      mobile:mobile,
      board:board,
      subject:subject,
      day:day,
      time:time,
      language:language,
      budget:budget,
      requirement:requirement
    });
    demo.save(function(err){
      if(err){
        console.log(err);
      }else{
        console.log("Success");
        res.redirect("/");
      }
    });
  // }
});

// Contact Form
app.get("/contact",function(req,res){
  res.render(__dirname +"/contact")
});

app.post("/contact",function(req,res){
  var name=req.body.name;
  var email=req.body.email;
  var subject=req.body.subject;
  var message=req.body.message;
  const contact=new Contact({
      name:name,
      email:email,
      subject:subject,
      message:message,
    });
    contact.save(function(err){
      if(err){
        console.log(err);
      }else{
        console.log("Success");
        res.redirect("/");
      }
  });
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server Has Started!");
});


// ************************* Added by Pradeepa
app.get("/soon",function(req,res){
  res.render(__dirname +"/blankpage")
});

app.get("/blogs",function(req,res){
  res.render(__dirname +"/blog")
});

app.get("/about",function(req,res){
  res.render(__dirname +"/about")
});

app.get("/sampleblog",function(req,res){
  res.render(__dirname +"/blog-single")
});

app.get("/faq",function(req,res){
  res.render(__dirname +"/faq")
});

app.get("/reviews",function(req,res){
  res.render(__dirname +"/reviews")
});

app.get("/latest",function(req,res){
  res.render(__dirname +"/latest")
});

app.get("/sampleblog-1",function(req, res){
  res.render(__dirname+"/blog1")
})

app.get("/sampleblog-2",function(req, res){
  res.render(__dirname+"/blog2")
})

app.get("/sampleblog-3",function(req, res){
  res.render(__dirname+"/blog3")
})
