const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
    day: {
        type:String,
        required:true
    },
    toTrain:{
        type:String,
        required:true,
    },
    muscleGroup:{
        type:String,
        required:true
    },
    isFood:{
        type:String,
        required:true
    },
    isCompleted:{
        type:Boolean,
        required:true
    },
    date:{
        type: Date,
        default:Date.now
    }
})

module.exports = Item = mongoose.model('items', ItemSchema)