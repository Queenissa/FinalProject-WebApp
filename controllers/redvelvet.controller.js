const { request,response } = require("express");

const redvelvetPage = async (request,response) => {
    response.render('pages/redvelvet')
}

module.exports = {
    redvelvetPage
}