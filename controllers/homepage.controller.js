const User = require('../models/user.model');
const { response } = require('express');




// get every categories
const getBlackPink = (request,response) => {
    response.render('pages/blackpink')
}
const getBts = (request,response) => {
    response.render('pages/bts')
}
const getTwice = (request,response) => {
    response.render('pages/twice')
}
const getExo = (request,response) => {
    response.render('pages/exo')
}
const getRedVelvet = (request,response) => {
    response.render('pages/redvelvet')
}
const getMomoland = (request,response) => {
    response.render('pages/momoland')
}

const homepage = async (request, response) => {
    response.render('pages/index')
}

const userLogin = async (request, response) => {

    try {
        const email = request.body.email;
        const password = request.body.password;

        console.log(request.body)
        const user =  await User.findOne({email: email});
        if(!user) return response.status(400).json({message: "Email doesnt exist!"});

        if(user.password !== password) response.status(400).json({message: "password doesnt match!"});
        
        console.log(user.role)
        //temporary 
        if(user.role == "admin"){
            response.render('pages/adminIndex');
        }
        response.render('pages/userIndex');
    } catch (e) {
        return response.status(400)
    }
}

const userRegister = async (request, response) => {
    try{
        console.log(request.body)
        const user = {
            username: request.body.username,
            email: request.body.email,
            password: request.body.password
        };

        const newUser  = new User(user);
        const result = await newUser.save();
        response.render('pages/userIndex')

    }  catch (e){
        return response.status(400).json({
            error: e
        })
    }
  
}


const getAdminIndex = async (request, response) => {
   response.render('pages/adminIndex')
}





module.exports = {
    homepage,
    userRegister,
    userLogin,
    getBlackPink,
    getBts,
    getTwice,
    getExo,
    getRedVelvet,
    getMomoland,
    getAdminIndex
}