var mongoose=require("mongoose");
var DemoClassFormSchema=({
  name:String,
  mobile:String,
  email:String,
  board:String,
  subject:String,
  day:String,
  time:String,
  language:String,
  budget:String,
  requirement:String,
});

module.exports=mongoose.model("Demo",DemoClassFormSchema);
