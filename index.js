const url = require("url");
const http = require("http");
const fs = require("fs");



http.createServer(function (req, res){
    const q = url.parse(req.url, true);
    
    // If index
    if (q.pathname == "/") {
        const filename = "./index.html";
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, {"content-type":"text/html"});
                return res.end("404 not found");
            }
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            return res.end();
        })
    }
    // if contact-me
    else if (q.pathname == "/contact-me") {
        const filename = "./contact-me.html";
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, {"content-type":"text/html"});
                return res.end("404 not found");
            }
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            return res.end();
        })
    }
    // if about
    else if (q.pathname == "/about") {
        const filename = "./about.html";
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, {"content-type":"text/html"});
                return res.end("404 not found");
            }
            res.writeHead(200, {"content-type":"text/html"});
            res.write(data);
            return res.end();
        })
    }
    else {
        const filename = "./404.html";
        fs.readFile(filename, function (err, data) {
            if (err) {
                res.writeHead(404, {"content-type":"text/html"});
                return res.end("error on the error page");
            }
            res.writeHead(200, {"content-type": "text/html"});
            res.write(data);
            return res.end();
        })
    }
    
    
    
    
}).listen(8080);