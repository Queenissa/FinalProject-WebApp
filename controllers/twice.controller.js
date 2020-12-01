const { request , response } = require('express')

const twicePage = async (request,response) => {
    response.render('pages/twice')
}

module.exports = {
    twicePage
}