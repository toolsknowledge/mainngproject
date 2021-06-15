//import mongoose module
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "_id":{type:String, required:true},
    "image":{type:String,required:true},
    "name":{type:String,required:true},
    "brand":{type:String,required:true},
    "price":{type:Number,required:true},
    "rating":{type:Number, required:true},
    "description":{type:String, required:true},
    "countInStock":{type:Number, required:true}
},{
    timestamps:true
});


const Product = mongoose.model("Product",productSchema);

module.exports = Product;