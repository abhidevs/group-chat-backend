const { Op } = require("sequelize");
const ArchivedMessage = require("../models/ArchivedMessage");
const Message = require("../models/Message");

const CronJob = require("cron").CronJob;

const job = new CronJob(
  "00 00 * * *",
  async () => {
    console.log("Moving 24 hours old messages to archivedMessages");
    var d = new Date();
    d.setDate(d.getDate() - 1);

    const messages1DayOld = await Message.findAll({
      where: { createdAt: { [Op.lte]: d } },
    });
    // console.log(messages1DayOld);

    messages1DayOld.forEach(async (msg) => {
      const { message, userId, roomId, mediaId } = msg;
      console.log({ message, userId, roomId, mediaId });
      const archivedMessage = await ArchivedMessage.create({ message, userId, roomId, mediaId });
      await archivedMessage.save()
      await msg.destroy();
    });
  },
  null,
  true,
  "America/Los_Angeles"
);
