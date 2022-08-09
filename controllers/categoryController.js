const Category = require('../models/categoryModel')
 
const getCategory= async(req,res)=>{
try{
    await Category.find()
    .populate ({path:'item_game', model: 'Games'})
    .exec((err,category)=>{
       
        if(err){
            console.log(err);
            process.exit(-1);
            }
            res.status(201).json({msg:'Exito en la consulta', category})
    })
    }catch(error){
    res.status(404).json({msg:'Ocurrio un error para obtener categorias', error})
    }
}  

const postCategory = async(req,res)=>{
    console.log(req.body)
    const { type,item_game}= req.body
    try{
        const category = new Category ({
            type,
            item_game
        })
        const newCategory = await category.save()
        res.status(201).json({msg:'creado con exito categoria', newCategory})
    }catch(error){
        res.status(404).json({msg:'Ocurrio un error al crear una categoria', error})
    }
}

const deleteCategory = async(req,res)=>{
   
}

const modifyCategory = async(req,res)=>{
    
}

module.exports = {getCategory , postCategory, deleteCategory,modifyCategory}