const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    img: { type: String, required: false, default: "default1.jpg" },
    role:{type: String, enum:["admin","client"], default:"client"},
    createdAt: { type: String, required: true },
    updatedAt: { type: String, required: true }
})

module.exports = mongoose.model('Users', UserSchema)
