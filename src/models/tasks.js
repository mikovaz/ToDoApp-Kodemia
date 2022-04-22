const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const schema = new Schema({
  nameTask: { type: String, required: true, unique: true },
  timeTask: { type: Number, required: true },
  completeTask: { type: Boolean, required: true },
});

module.exports = {
  schema,
  model: mongoose.model("todo", schema),
};
