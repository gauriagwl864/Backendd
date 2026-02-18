const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to Home Page");
  } 
  else if (method === "GET" && url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ users: ["Alice", "Bob", "Charlie"] }));
  } 
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

// Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

// const http = require("http");
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