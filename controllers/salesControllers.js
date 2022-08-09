const Sales = require('../models/salesModel')

const getSales = async(req,res)=>{
    try{
        await Sales.find()
       .populate({path:'user',model:'Users'})
       .populate({path:'item',model:'Games'})
       .exec((err,sales)=>{
       
            if(err){
                console.log(err);
                process.exit(-1);
                }
                console.log(sales)
                res.status(201).json(sales)
        })

    }catch(error){
        res.status(201).json(error)
    }
};

const postSales = async(req,res)=>{
    console.log(req.body)
const {user,item,pay,total,date_time}=req.body;

try{
    const sale = new Sales({
        user,
        item,
        pay,
        total,
        date_time
    });
    const newSale = await sale.save();
    res.status(201).json(newSale)
}catch(error){
    res.status(404).json(error)
}
}

module.exports = {postSales,getSales}