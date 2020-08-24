const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    mobile: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('User', userSchema);
