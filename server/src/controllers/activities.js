const { Activity, Country } = require("../connection_db")

const saveActivity = async(req, res) => {
    try {
        const { name, difficulty, duration, season, countries } = req.body
    
        const saveActivity = await Activity.build({name, difficulty, duration, season})
        await saveActivity.save()
        countries.forEach( async(country) => {
            await saveActivity.addCountry(country)
        });
        
        res.status(200).send('The activity has been registered successfully')
    } catch (error) {
        res.status(200).json({error: error.message})
    }
}

const allActivities = async(req, res) => {

    const activities = await Activity.findAll({include: Country})

    res.status(200).json(activities)
}

module.exports = {
    saveActivity,
    allActivities
}