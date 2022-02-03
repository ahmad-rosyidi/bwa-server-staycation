const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  bankName: {
    type: String,
    required: true,
  },
  accountNo: {
    type: String,
    required: true,
  },
  accountHolderName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);
