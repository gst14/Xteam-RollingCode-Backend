const { Schema , model} = require('mongoose')

const categorySchema = new Schema({
    type: {
        type:String,
        required: true
    },
    item_game:{
        type: Array(Schema.ObjectId),
        ref: 'Games' 
    }
})

module.exports = model("Category", categorySchema)