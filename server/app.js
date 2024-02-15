const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const registerRouter = require("./api/router/register.route");
const loginRouter = require("./api/router/login.route");
const userRouter = require("./api/router/user.route");

app.use(express.json());

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/users", userRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.APP_PORT}`);
});
