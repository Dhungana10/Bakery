const mongoose = require("mongoose")

const bakerySchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    min: 0
  },
  des: {
    type: String,
    trim: true
  }
})

const Bakery = mongoose.model ('Bakery', bakerySchema);

module.exports = Bakery;
