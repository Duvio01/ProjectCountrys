const express = require('express')
const { saveActivity, allActivities } = require('../controllers/activities')
const routerActivity = express.Router()

routerActivity.post('', saveActivity)
routerActivity.get('', allActivities)

module.exports = routerActivity