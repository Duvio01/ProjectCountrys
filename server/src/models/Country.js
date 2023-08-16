const { DataTypes } = require("sequelize")

const country = (sequelize) => {
    sequelize.define('Country', {
        id: {
            type: DataTypes.STRING(3),
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        continent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capital: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        subregion: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        area: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        population: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}

module.exports = country