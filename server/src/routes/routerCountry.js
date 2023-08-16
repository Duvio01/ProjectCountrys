const express = require('express')
const {countryAll, findCountry} = require('../controllers/countryAll')
const routerCountry = express.Router()

routerCountry.get('', countryAll)
routerCountry.get('/:id', findCountry)

module.exports = routerCountry