const User = require('../models/users.model');


//Get All User
const getAllUser = (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.send(err)
        }
        res.send(users)
    });
}

module.exports = {
    getAllUser
}