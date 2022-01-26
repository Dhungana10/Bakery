const express = require("express")
const app = express()
const mongoose = require("mongoose")
const seedDB = require("./seed")
const cors = require('cors');

mongoose
  .connect(
    "mongodb+srv://kshitizDB:dhungana@cluster0.7neba.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB CONNECTED")
  })
  .catch((err) => {
    console.log(err)
  })

seedDB()

app.use(express.json());

app.use(cors(
  {
    origin:['http://localhost:3000'],
    credentials: true
  },
))

const bakeryRoutes = require("./api/bakeryRoutes")

app.get("/hello", (req, res) => {
  res.status(200).json({ msg: "Hello From The Server" })
})

app.use(bakeryRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server running at ${port}`)
})
