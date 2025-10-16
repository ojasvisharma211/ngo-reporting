const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  ngoName: String,
  month: String,
  peopleHelped: Number,
  eventsConducted: Number,
  fundsUtilized: Number
});

module.exports = mongoose.model("Report", reportSchema);
