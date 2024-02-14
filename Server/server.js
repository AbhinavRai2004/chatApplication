// importing the necessary dependencies for the application.

const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const path = require("path");


const app = express();
const server = http.createServer(app);
const io = new Server(server);

// An event listener that listens for a new connection to the server using Socket.io. 
io.on("connection", (socket) => {
  console.log("A user has connected");

  socket.on("message", (message) => {
    console.log("Received message:", message);
    io.emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user has disconnected");
  });
});

 
app.use(express.json());

// Routes.
app.get("/", (req, resp) => {
  resp.sendFile(path.join(__dirname, "/client/public", "index.html"));
});


server.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
