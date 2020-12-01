const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = new Schema({
    productNumber: { type: Number, required: true },
    productName: {type: String, required: true},
    productDescription: {type: String, required: true},
    price:{type: Number, require: true},
    qty: {type: Number, required:true},
    img: { type: String, required: false, default: "notavailable.jpg" },
    created_at: { type: String, required: true },
    updated_at: { type: String, required: true },
    created_by: { type: String, required: true },
    updated_by: { type: String, required: true }
})

module.exports = mongoose.model('Products', ProductSchema)