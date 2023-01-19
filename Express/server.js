const express = require('express');
const app = express();

app.get("/", function(request,respose){
     //console.log(request);
respose.send("Kya Hai Be?");
});

app.get("/contact", function(request,respose){
     //console.log(request);
respose.send("Contact me at: rohitbeni31@gmail.com");
});

// app.get("/contact", fucntion(request, response){
//      response.send("Contact me at: rohitbeni31@gmail.com");
// });



app.listen(3000,function(){console.log("Server Started ")});