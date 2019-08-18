const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const DataSchema=new Schema({
    name:{
        type:String,
        required:false
    },
    info:{
        type:String,
        required:true
    }
});

mongoose.model('data', DataSchema);