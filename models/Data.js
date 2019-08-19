const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const DataSchema=new Schema({
    name:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default: Date.now
    },
    info:{
        type:String,
        required:true
    }
});

mongoose.model('data', DataSchema);