const Games = require('../models/gamesModels')

const getGame = async (req,res)=>{
    try{
        const games = await Games.find({})
        res.status(201).json(games)
    }catch(error){
        res.status(404).json(error)
    }
}

const sendGame = async (req,res)=>{
    const{ image, title, details, price, prominent}= req.body  
      try {
        const game = new Games({
           image,
           title,
           details,
           price,
           prominent 
        })
        const newGame = await game.save()
        res.status(201).json(newGame)
    } catch (error) {
        res.status(404).json(error)
    }
}

const deleteGame=async(req,res)=>{
    const {id } = req.params
    const getById = await Games.findByIdAndDelete(id)
    if(getById !== null){
        res.status(200).json("Se elimino el juego")
    }else{
        res.status(404).json("Algo salio mal y no se pudo eliminar el juego")
    }
}

const updateGame=async(req,res)=>{
    const {id} = req.params 
    const{ image, title, details, price, prominent}= req.body  
    const getIdUpdate = await Games.findByIdAndUpdate(id,{ image,title,details,price,prominent})
    if (getIdUpdate !== null) {
        res.status(200).json('Se modifico el juego con exito',)
    } else {
        res.status(404).json("Algo salio mal y no se pudo realizar la modificacion del juego")
    }
}

module.exports = { getGame, sendGame, deleteGame, updateGame}