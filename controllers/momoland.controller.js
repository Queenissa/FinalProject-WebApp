const { request, response} = require("express");

const momolandPage = async( request,response ) => {
    response.render('pages/momoland')
}

module.exports = {
    momolandPage
}