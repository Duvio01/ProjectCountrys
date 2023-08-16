const { Op } = require("sequelize")
const { Country, Activity } = require("../connection_db")

const countryAll = async (req, res) => {
    try {
        let { name } = req.query
        if(name){
            name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            const countries = await Country.findAll({
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            })

            if(countries.length === 0) return res.status(200).send('There is no country with the name provided')

            return res.status(200).json(countries)
        }else{
            const allCountries = await Country.findAll()
            return res.status(200).json(allCountries)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const findCountry = async (req, res) => {
    try {
        const { id } = req.params
        const country = await Country.findOne({
            where: {id},
            include: Activity
        })
        res.status(200).json(country)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    countryAll,
    findCountry
}