const jsonwebtoken = require("jsonwebtoken");
const generateToken = (user)=>{
    return jsonwebtoken.sign({user},process.env.TOKEN_PASSWORD,{expiresIn:'30d'});
};
module.exports = generateToken;