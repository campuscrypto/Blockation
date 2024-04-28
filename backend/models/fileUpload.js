const mongoose = require("mongoose");

const fileUploadSchema = mongoose.Schema({
  user: {
    type: String,
    
    required: true,
  },
  originalfileName: {
    type: String,
    required: true,
  },
  newfileName: {
    type: String,
    required: true,
  },
  cid: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("File", fileUploadSchema);
