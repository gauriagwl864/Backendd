// const http = require("http");  //MINE code
// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, 'lock.txt');

// const server = http.createServer((req, res) => {

//     const url = new URL(req.url, `http://${req.headers.host}`);
//     const pathname = url.pathname;
//     const method = req.method;

//     const newlog = new Date().toISOString() + " " + pathname + " " + req.method;

//     fs.appendFile(filePath, newlog, () => {
//         res.writeHead(201, 'created');
//         res.end();
//     });

// });

// server.listen(3000, () => {
//     console.log("server running on http://localhost:3000");
// });


//SIR'S code
const fs=require("fs");
const http=require("http");

const server = http.createServer((req, res) => {
    const method = req.method;
    const url =req.url;
    const date=new Date().toISOString();
    const log= `new log - ${date} | method = $ {method} | url=${url}\n`

    fs.appendFile("./log.txt", log,  (err)=> {
    if (err) {
      res.writeHead(500) 
      res.end();
    } else {
      res.writeHead(200, "done")
    res.end()
    }
  })
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
