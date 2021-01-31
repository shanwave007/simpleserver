const { RSA_NO_PADDING } = require('constants');
const http = require('http');


const server = http.createServer((req, res)=>{
    console.log(req);
    res.setHeader('Content-type','text/html');
    res.write("<html><body><h1>Hello 8082 second</h1></body></html>")
    res.end();
});

server.listen(8080);