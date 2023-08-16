const { DataTypes } = require("sequelize")

const activity = (sequelize) => {
    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: DataTypes.ENUM,
            values: ['1','2','3','4','5'],
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        season: {
            type: DataTypes.ENUM,
            values: [ 'Summer', 'Autumn', 'Winter', 'Spring'],
            allowNull: false,
        } 
    })
}

module.exports = activity