const mongoose = require("mongoose");
const connectDBM = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URIM);
  console.log(`MONGODB connected: ${conn.connection.name}`);
};
module.exports = connectDBM;
