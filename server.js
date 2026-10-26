const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(500);
      res.end("Server error");
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
  });
});

server.listen(port, "1000", () => {
  console.log(`Website is running on port ${port}`);
});