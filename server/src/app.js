const axios = require('axios');
const express = require('express')
const server = express()
const { Country } = require('./connection_db');
const routerCountry = require('./routes/routerCountry');
const routerActivity = require('./routes/routerActivity');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
})

server.use(express.json())

server.use('/countries', routerCountry)
server.use('/activities', routerActivity)

server.get('/addData', async (req, res) => {

    try {

        const isDataCountryDb = await Country.findAndCountAll()
        if(isDataCountryDb.count > 0) return res.status(200).send('The data has already been loaded')

        const countries = await axios.get('http://localhost:5000/countries')
        let dataCountryArray = []

        countries.data.forEach(country => {
            let countryObject = {
                id: country.cca3,
                name: country.name.common,
                image: country.flags.png,
                continent: country.continents[0],
                capital: country.hasOwnProperty('capital') ? country.capital[0] : null,
                subregion: country.hasOwnProperty('subregion') ? country.subregion : null,
                area: country.area,
                population: country.population
            }

            dataCountryArray.push(countryObject)
        });
        await Country.bulkCreate(dataCountryArray)
        
        return res.status(200).send('Data loaded successfully')

    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

module.exports = server