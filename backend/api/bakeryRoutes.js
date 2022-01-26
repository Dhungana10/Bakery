const express = require("express")
const router = express.Router()
const Bakery = require("../models/bakery")
const Order = require("../models/order");

router.get("/allbakery", async (req, res) => {
  try {
    const allBakery = await Bakery.find({})
    res.status(200).json(allBakery)
    // res.send()
  } catch (e) {
    res.status(404).json({ msg: "Cannot fetch the bakery items" })
  }
})

router.post("/placeorder",async(req,res)=>{

  try{
    const {cart : orderedItems} = req.body;
    const newOrder = new Order({orderedItems});
    //Creates a new order
    await newOrder.save();
    res.status(200).json({msg: "Order placed successfully"});
  }
  catch(e){
      res.status(400).json({msg: "Order cannot be placed !! "})
  }
})
module.exports = router
