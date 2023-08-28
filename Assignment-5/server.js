const http = require('http');
const fs = require('fs');

const myServer = http.createServer(function(req, res){
   
    if(req.url=="/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2>This is Home Page.</h2>");
        res.end();
        }
    else if(req.url=="/about"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h2>This is About Page.</h2>");
            res.end();
            }
    else if(req.url=="/contact"){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("<h2>This is Contact Page.</h2>");
            res.end();
    }
    else if(req.url=="/file-write"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.writeFile('demo.txt', 'Hello World', function(error){
            if(error){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("Have an Error!");
                res.end();

            }else{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write("File Write Success!");
                res.end();
            }
        })
    }
});

myServer.listen(3000, function(res){
    console.log("Sarver listening on port 3000.")
});