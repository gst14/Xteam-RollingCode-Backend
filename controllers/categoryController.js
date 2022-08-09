const Category = require('../models/categoryModel')
const Game = require('../models/gamesModels')
 
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
   const {id} = req.params
   const item = await Category.findById(id)
   const deleteGame = await Game.deleteMany({_id:{$in:item.item_game}}) 
   const deleteAll = await Category.deleteOne({_id : id})
   console.log(deleteGame,deleteAll)
   res.status(201).json(' delete sucessfull')
}

const modifyCategory = async(req,res)=>{
const {id}= req.params
const {type, item_game}= req.body
const getIdModify = await Category.findByIdAndUpdate(id,{
    type,
    item_game
})
if(getIdModify !== null){
res.status(200).json({msg: 'se modifico con exito la categoria',getIdModify})
}else{
  res.status(404).json({msg:'error al modificar la categoria'})  
} 
}

module.exports = {getCategory , postCategory, deleteCategory,modifyCategory}