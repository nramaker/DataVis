var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var dataPath = __dirname + "/data/";
var assetPath = __dirname + "/assets/";

router.use(function (req,res,next) {
  // console.log("/" + req.method);
  // console.log(req.url);
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

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

app.use("/",router);

//DATA ROUTES
app.use("/data/last_eval_rating.csv",function(req,res){
  console.log("Loading CSV file.");
  res.sendFile(dataPath + "last_eval_rating.csv");
});

app.use("/data/dept_rate_size.csv",function(req,res){
  console.log("Loading CSV file.");
  res.sendFile(dataPath + "dept_rate_size.csv");
});

app.use("/favicon.ico", function(req, res){
	res.sendFile(assetPath+"img/favicon.ico");
});

//REMOVE THESE ROUTES
app.use("/data/segments_table2.csv",function(req,res){
  console.log("Loading CSV file.");
  res.sendFile(dataPath + "segments_table2.csv");
});

app.use("/data/cereal.csv",function(req,res){
  console.log("Loading CSV file.");
  res.sendFile(dataPath + "cereal.csv");
});


app.use("*",function(req,res){
  console.log("Didn't find file.");
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
