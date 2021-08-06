//import modules
//require() function, used to import the modules
const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const encryptjs = require("encryptjs");
const jsonwebtoken = require("jsonwebtoken");
const express_async_handler = require("express-async-handler");
const mongodb = require("mongodb");
const data = require("./data");
const User = require("./userModel");
const bcryptjs = require("bcryptjs");
const generateToken = require("./generateToken");


//import Product model
const Product = require("./productModal");


//enable the global configuration settings
dotenv.config();


//create the rest object
const app = express();
//app is the rest object
//app object, used to develop the rest services



//MIME Type
//JSON, want to set as communication language.
app.use(bodyparser.json());




//read the url encoded data
app.use(bodyparser.urlencoded({extended:false}));




//cors policy
app.use(cors());



//connect to mongodb database
mongoose.connect(`mongodb+srv://admin:admin@miniprojectdb.nzphu.mongodb.net/mainngproject?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});


//create the user, to connect to database
//const ashokIT = mongodb.MongoClient;
//where "ashokIT" is the reference variable, used to connect to database.



//create the Rest API
app.get("/api/products",express_async_handler(async (req,res)=>{
        const products = await Product.find();
        res.send(products);
}));


//create the rest api based on product id
app.get("/api/products/:id",express_async_handler(async (req,res)=>{
    const product = await Product.findOne(mongoose.Types.ObjectId(req.params.id));
    if(!product){
        res.status(400).send({"message":"product not available"});
    }else{
        res.status(200).send(product);
    }
}));



//insert static data into database
app.get("/api/users/seed",express_async_handler(async (req,res)=>{
    await User.remove({});
    const result = await User.insertMany(data.users);
    res.send({result})
}));



app.post("/api/users/signin",express_async_handler(async (req,res)=>{
    const user = await User.findOne({"email":req.body.email});
    if(user){
        if(bcryptjs.compareSync(req.body.password,user.password)){
            res.status(200).send({
                _id:user._id,
                email:user.email,
                isAdmin:user.isAdmin,
                token:generateToken(user)
            })
        }else{
            res.status(401).send({message:"invalid password"});
        }
    }else{
        res.status(401).send({"message":"invalid user name / password"});
    }
}));





//assign the port number
let port = process.env.PORT || 8080;
app.listen(port,()=>{
    console.log("server ready")
});






























