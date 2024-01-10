const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routing
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/login.html");
});

app.get("/app", (req, res) => {
  res.sendFile(__dirname + "/public/pages/app.html");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

// Server Logic
const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

process.on("SIGINT", () => {
  console.log("Server is shutting down...");
  server.close(() => {
    console.log("Server has been gracefully terminated");
    process.exit(0);
  });
});

process.on("SIGTERM", () => {
  console.log("Server is shutting down...");
  server.close(() => {
    console.log("Server has been gracefully terminated");
    process.exit(0);
  });
});
