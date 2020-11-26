const { request, response } = require("express");

const blinkPage = async (request, response) => {
    response.render('pages/blackpink')
}

module.exports = {
    blinkPage
}