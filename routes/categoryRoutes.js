const Router = require('express')
const{
    getCategory,
     postCategory, 
     deleteCategory,
     modifyCategory
} = require('../controllers/categoryController')


const categoryRoute = Router()

categoryRoute.get('/', getCategory)
             .post('/',postCategory)
             .delete('/:id',  deleteCategory)
             .put('/:id', modifyCategory)

module.exports= categoryRoute