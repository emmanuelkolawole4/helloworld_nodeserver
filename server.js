const http = require("http");
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world, welcome to WeJapa Internships");
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("oops...route not found!");
  }
});
server.listen(port, () => console.log(`Server running on port ${port}`));
