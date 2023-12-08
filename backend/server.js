const express = require("express");
const app = express();
const port = 3000;
const db = require("./config/dbconfig");

const userRoute = require("./components/users/UserRoutes");

// Launch the server
const initApp = async () => {
  console.log("Trying to reach the database");
  try {
    await db.authenticate();
    await db.sync({ alter: true });
    console.log("Database connected succesfully!");
    app.listen(port, () => {
      console.log("Server launched succesfully!");
      console.log("Server available here : htpps://localhost:3000");
    });
  } catch (err) {
    console.log("Can't connect to the server! ");
  }
};

initApp();

app.use(userRoute);
