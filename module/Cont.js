const mongoose = require("mongoose");
const Parrot = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  add: {
    type: String,
  },
  text: {
    type: String,
  },
});

const email =
  mongoose.models.Eye || mongoose.model("Eye", Parrot);

module.exports = email;
