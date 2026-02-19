const http = require("http");
const server = http.createServer((req, res) => {
  res.end("Hello from sample app!");
});
server.listen(3005, () => console.log("Sample app running!"));
