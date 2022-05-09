exports.createChatMessage = async ({ body: { message }, user }) => {
  try {
    const msg = await user.createChatMessage({ message });
    await msg.save();
    return msg;
  } catch (error) {
    throw error;
  }
};
