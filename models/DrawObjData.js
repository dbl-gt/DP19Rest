const mongoose=require('mongoose');
const Schema=mongoose.Schema();


const DrawObjSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    x:{
        type:String,
        required:true
    },
    y:{
        type:String,
        required:true
    },
    length:{
        type:String,
        required:true
    },
    width:{
        type:String,
        required:true
    },
    height:{
        type:String,
        required:true
    },
    red:{
        type:String,
        required:true
    },
    blue:{
        type:String,
        required:true
    },
    green:{
        type:String,
        required:true
    },
});

mongoose.model('drawObjData', DrawObjSchema);