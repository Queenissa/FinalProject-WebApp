const mongoose = require('mongoose');
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: {type: String, required: true},
    imageUrl: {type: String, required: false},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    createdAt:{type: Date, default: new Date()},
    updatedAt:{type: Date, default: null}
})

module.exports = mongoose.model('Product', productSchema)
