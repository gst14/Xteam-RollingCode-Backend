const express = require('express')
const gamesApp=express()

const cors = require('cors')
const morgan = require ('morgan')

require('dotenv/config')
const gamesRoutes = require('../routes/gamesRoutes')
require('../dataBase/gamesConnection')

const portGames=process.env.PORT

gamesApp.use(cors())
gamesApp.use(morgan('dev'))
gamesApp.use(express.json())

gamesApp.get('/',(req,res)=>{
    res.json('esta funcionando bien')
})
gamesApp.use('/games',gamesRoutes)



gamesApp.listen(portGames,()=>{
    console.log("Estamos escuchando el puerto:", portGames)
})