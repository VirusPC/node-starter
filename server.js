const http = require('http');
const fs = require('fs');
const url = require('url');
 
const myServer = http.createServer(function(req,res){
    const urls = url.parse(req.url, true);
    console.log(urls);

    if(urls.pathname === "/") {
        fs.readFile('./src/index.html', (err, data) => {
            if(!err) {
                res.end(data);
            } else {
                console.log(err)
            }
        })
    } else {
        fs.readFile('./src'+req.url, (err, data) => {
            if(!err){
                res.end(data);
            } else {
                console.log(err);
            }
        })
    }
})
 
 
myServer.listen('5050',function(err){
    if(err){
        console.log(err);
        throw err;
    }
    console.log("服务器已开启。端口号为:5050");
})