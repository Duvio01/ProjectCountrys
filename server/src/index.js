const server = require('./app')
const { conection } = require('./connection_db')
require('dotenv').config()
const { PORT } = process.env

server.listen(PORT, async() => {
    await conection.sync({force:true})
    // await conection.sync({alter: true})
    console.log(`Puerto trabajando en el ${PORT}`)
})