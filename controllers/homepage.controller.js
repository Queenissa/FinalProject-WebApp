const User = require('../models/user.model')


const homepage = async (request, response) => {
    response.render('pages/index')
}

const userRgistration = async (request, response) => {
    response.render('pages/register');
}

const userLogin = async (request, response) => {
    response.render('pages/login')
}

// get every categories
// const getBlackPink = (request,response) => {
//     response.render('pages/blackpink')
// }
// const getBts = (request,response) => {
//     response.render('pages/bts')
// }
// const getTwice = (request,response) => {
//     response.render('pages/twice')
// }
// const getExo = (request,response) => {
//     response.render('pages/exo')
// }
// const getRedVelvet = (request,response) => {
//     response.render('pages/redvelvet')
// }
// const getMomoland = (request,response) => {
//     response.render('pages/momoland')
// }

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
        response.render('pages/index')

        // if(!result){
        //     response.redirect('pages/register')
            
        // }
        // response.status(200).json({
        //     message: "New user added"
        // });
        

    }  catch (e){
        return response.status(400).json({
            error: e
        })
    }
  
}



const userSignin = async (request, response) => {
    try {
        const username = request.body.username;
        const password = request.body.password;
        console.log(request.body)
        await User.findOne({username: username}, (err, foundResults) => {
            if (err) {
                console.log(err)
            } else{
                if (foundResults.password === password){
                    response.render('pages/index')
                } else {
                    response.redirect('/')
                }
            }
        })
        
        
    } catch (e) {
        return response.status(400)
    }

}



module.exports = {
    homepage,
    userRgistration,
    userLogin,
    userRegister,
    userSignin,
}