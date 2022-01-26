const mongoose = require("mongoose")
const Bakery = require("./models/bakery")

const Dummy = [
  {
    name: "Pastry",
    price: 10,
    des: "A good pastry"
  },
  {
    name: "Donut",
    price: 5,
    des: "A good donut"
  },
  {
    name: "Cake",
    price: 20,
    des: "A good cake "
  },
  {
    name: "Black Forest",
    price: 20,
    des: "A good Black Forest "
  },
  {
    name: "Butter Scotch Cake",
    price: 20,
    des: "A good Butter Scotch Cake "
  }
];

const seedDB = async () => {
  await Bakery.deleteMany({});
  await Bakery.insertMany(Dummy);
  console.log("DB SEEDED");
}

module.exports = seedDB;
