const { Op } = require("sequelize")
const { Country, Activity } = require("../connection_db")

const countryAll = async (req, res) => {
    try {
        let { name, paginate, sort, order, continent, limit, activity } = req.query

        if(paginate === 1) paginate = 0
        else paginate = (paginate * 10) - 10 
        
        let where = {}
        if(name) {
            name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
            where['name'] = {
                [Op.like]: `%${name}%`
            }
        }

        if(activity){
            const activityResp = await Activity.findOne({
                where: { name: activity},
                include: Country
            })

            const findCountries = activityResp.Countries.map(country => country.id)

            where['id'] = {
                [Op.in]: findCountries
            }
        }

        if(continent){
            where['continent'] = continent
        }

        if(name){
            const countries = await Country.findAndCountAll({
                where: where,
                limit: 10,
                offset: paginate ? paginate : 0,
                order: sort ? [
                    [sort, order]
                ] : []
            })

            if(countries.rows.length === 0) return res.status(404).send('There is no country with the name provided')

            return res.status(200).json(countries)
        }else{
            const allCountries = await Country.findAndCountAll({
                where: where,
                limit: limit ? limit : 10,
                offset: paginate ? paginate : 0,
                order: sort ? [
                    [sort, order]
                ] : []
            })
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