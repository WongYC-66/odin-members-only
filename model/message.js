const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  title: { type: String, required: true },
  message: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User"},
  timestamp: { type: Date, required: true },
});


// Export model
module.exports = mongoose.model("Message", MessageSchema);