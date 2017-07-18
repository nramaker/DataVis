var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

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

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
