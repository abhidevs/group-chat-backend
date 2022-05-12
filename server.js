const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = require("./utils/db");
const AuthRoutes = require("./routes/AuthRoutes");
const ChatRoutes = require("./routes/ChatRoutes");
const ChatRoomRoutes = require("./routes/ChatRoomRoutes");
const UserRoutes = require("./routes/UserRoutes");
const User = require("./models/User");
const Message = require("./models/Message");
const Room = require("./models/Room");
const Participant = require("./models/Participant");
const Invite = require("./models/Invite");
const Media = require("./models/Media");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api", (req, res) => res.send("Welcome to Expense Tracker API"));
app.use("/api/auth", AuthRoutes);
app.use("/api/chat", ChatRoutes);
app.use("/api/rooms", ChatRoomRoutes);
app.use("/api/users", UserRoutes);

User.hasMany(Message);
Message.belongsTo(User);
Room.hasMany(Message);
Message.belongsTo(Room);
Message.belongsTo(Media, { as: "media", foreignKey: "mediaId" });
User.belongsToMany(Room, { through: Participant });
Room.belongsToMany(User, { through: Participant });
Room.hasMany(Invite);
Invite.belongsTo(Room);
Invite.belongsTo(User, { foreignKey: "senderId" });
Invite.belongsTo(User, { foreignKey: "receiverId" });

const port = 3000;
sequelize
  .sync()
  .then((res) =>
    app.listen(port, () => console.log(`server running at port ${port}`))
  )
  .catch((err) => console.log(err));
