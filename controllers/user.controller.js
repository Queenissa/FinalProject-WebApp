const User = require("../models/user.model");
const { request, response } = require("express");


module.exports = {
    addUser: async (request, response) =>{
        const newUser = req.body;
        try {
            const tobeAddedUser = await new User(newUser);
            const newlyAddedUser = await tobeAddedUser.save();

            if(!newlyAddedUser) return response.redirect('/');

            response.redirect('/');
        } catch (error) {
            response.status(500).send(error);
        }
    },

    loginUser: async(request, response) =>{
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await User.findOne({email: email});
            if(!user) return response.status(500).json({message: "Email doesn't match!"});

            if(user.password != password) response.status(500).json({message: "password doesn't match!"});

            response.render('index', {user: user});
        } catch (error) {
            response.status(500).send(error);
        }

    }
}