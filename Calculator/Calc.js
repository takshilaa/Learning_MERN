const express= require("express");
const bodyParser = require("body-parser");

const app =  express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", function(req , res){
// res.sendFile(__dirname+"index.html");
res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res){
     var num1= Number(req.body.num1);
     var num2= Number(req.body.num2);
     var ressult=num1+num2;
res.send("Result is : "+ ressult);
})

app.get("/bmi", function(req,res){
     res.sendFile(__dirname+"/bmi.html");
});


app.post("/bmi", function(req, res){
     var Weight= parseFloat(req.body.Weight);
     var Height= parseFloat(req.body.Height);
     var ressult2=Weight/(Height*Height);
res.send("Result is : "+ ressult2);
});

app.listen(3000,function(){console.log("Server Started ")});