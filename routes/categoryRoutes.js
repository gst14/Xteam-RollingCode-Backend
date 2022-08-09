const Router = require('express')
const{
    getCategory,
     postCategory, 
     deleteCategory,
     modifyCategory
} = require('../controllers/categoryController')

const { jwtValidator } = require("../middlewares/jwtValidator")

const categoryRoute = Router()

categoryRoute.get('/', getCategory)
             .post('/', jwtValidator, postCategory)
             .delete('/',  deleteCategory)
             .put('/', modifyCategory)

module.exports= categoryRoute