const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = require("./utils/db");
const AuthRoutes = require("./routes/AuthRoutes");
const ChatRoutes = require("./routes/ChatRoutes");
const User = require("./models/User");
const ChatMessage = require("./models/ChatMessage");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", (req, res) => res.send("Welcome to Expense Tracker API"));
app.use("/api/auth", AuthRoutes);
app.use("/api/chat", ChatRoutes);

User.hasMany(ChatMessage);
ChatMessage.belongsTo(User);

const port = 3000;
sequelize
  .sync()
  .then((res) =>
    app.listen(port, () => console.log(`server running at port ${port}`))
  )
  .catch((err) => console.log(err));
