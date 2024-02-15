const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const userRouter = require("./api/router/user.route");
const registerRouter = require("./api/router/register.route");

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/register", registerRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
