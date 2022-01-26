const mongoose = require ('mongoose');


const orderSchema = new mongoose.Schema({
    orderedItems:[
        {
        _id: {id: false},
        name:String,
        des: String,
        price: Number,
        qty: Number,
    } 
    ]
},{timestamps: true});

// order place ko time check garna lai timestamps

module.exports = mongoose.model('Order', orderSchema);
