const { request,response } = require("express");

const btsPage = async (request,response) => {
    response.render('pages/bts')
}

module.exports = {
    btsPage
}