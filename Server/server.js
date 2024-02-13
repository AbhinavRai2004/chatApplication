const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const server = http.createServer(app);

app.use(express.json());
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "/client/public", "index.html"));
});
server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
