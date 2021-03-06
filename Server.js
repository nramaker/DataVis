var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var dataPath = __dirname + "/data/";
var assetPath = __dirname + "/assets/";

router.use(function (req,res,next) {
  next();
});

//PAGE ROUTES
router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/page2",function(req,res){
  res.sendFile(path + "p2.html");
});
router.get("/page3",function(req,res){
  res.sendFile(path + "p3.html");
});
router.get("/page4",function(req,res){
  res.sendFile(path + "p4.html");
});
router.get("/page5",function(req,res){
  res.sendFile(path + "p5.html");
});
router.get("/page6",function(req,res){
  res.sendFile(path + "p6.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

//DATA ROUTES
app.use("/data/last_eval_rating.csv",function(req,res){
  res.sendFile(dataPath + "last_eval_rating.csv");
});

app.use("/data/dept_rate_size.csv",function(req,res){
  res.sendFile(dataPath + "dept_rate_size.csv");
});

app.use("/data/dept_size.csv",function(req,res){
  console.log("Loading CSV file.");
  res.sendFile(dataPath + "dept_size.csv");
});

app.use("/data/dept_table.csv", function(req, res){
   res.sendFile(dataPath + "dept_table.csv");
});

app.use("/data/satis_level.csv", function(req, res){
   res.sendFile(dataPath + "satis_level.csv");
});


//ASSET ROUTES

app.use("/favicon.ico", function(req, res){
	res.sendFile(assetPath+"img/favicon.ico");
});

app.use("/paramUtils.js", function(req, res){
  res.sendFile(__dirname+"/paramUtils.js");
});


app.use("*",function(req,res){
  console.log("Didn't find file.");
  res.sendFile(path + "404.html");
});

// app.listen(3000,function(){
//   console.log("Live at Port 3000");
// });

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});