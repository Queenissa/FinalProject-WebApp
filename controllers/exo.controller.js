const { request,response } = require("express");

const exoPage = async (request,response) => {
    response.render('pages/exo')
}

module.exports = {
    exoPage
}