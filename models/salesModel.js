

const { Schema , model } = require("mongoose")

const salesSchema = new Schema({
user: {
    type: Schema.ObjectId,
    ref: 'Users'
},
item:{ 
    type: Array(Schema.ObjectId),
    ref: 'Games'
},
pay : {
    type: String,
 required: true
},
total :{
    type: Number,
    required: true
},
date_time:{
    type: String,
    required: true
}
})

module.exports = model("Sales", salesSchema);