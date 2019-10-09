var express=require("express");
var app=express();
app.use(express.static("../wwwroot"));

let dbserver=require('./mysqlhelper');
require('./gameapi')(app,dbserver);
require('./userapi')(app,dbserver);
//require('./login')(app,dbserver);


const path = require('path')
app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../wwwroot', 'index.html'))
})

app.listen(9000);
