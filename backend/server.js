const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/dbconfig");

// const corsOption = {
//   origin: "http://localhost:3000",
// };
// app.use(cors(corsOption));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server listening on port : " + port);
  console.log("Server running at : http://localhost:3000");
});

db.authenticate()
  .then(() => {
    console.log("Database Connected.");
  })
  .catch((err) => {
    console.log(err);
  });
