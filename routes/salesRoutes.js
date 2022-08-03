const Router = require('express')
const { 
    getSales,
    postSales
}= require('../controllers/salesControllers')

const salesRoute = Router()

salesRoute.get('/',getSales);
salesRoute.post('/',postSales);

module.exports = salesRoute