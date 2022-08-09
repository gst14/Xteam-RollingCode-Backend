const Router = require('express')
const { 
    getSales,
    postSales
}= require('../controllers/salesControllers');

const { jwtValidator } = require("../middlewares/jwtValidator");

const salesRoute = Router();

salesRoute.get('/', jwtValidator, getSales);
salesRoute.post('/', jwtValidator, postSales);

module.exports = salesRoute