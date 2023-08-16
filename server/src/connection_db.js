const { Sequelize } = require('sequelize');
const country = require('./models/Country');
const activity = require('./models/Activity');
require('dotenv').config()
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const conection = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {logging: false})

country(conection)
activity(conection)

const { Country, Activity } = conection.models

Activity.belongsToMany(Country, { through: 'ActivityCountries'})
Country.belongsToMany(Activity, { through: 'ActivityCountries'})

module.exports = {
    Country,
    Activity,
    conection
}