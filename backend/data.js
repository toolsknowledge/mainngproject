const bcrypt = require("bcryptjs");

const data = {
    "users":[
        {
            name:"AshokIT",
            password:bcrypt.hashSync("admin",8),
            isAdmin:true,
            email:"hr@ashokit.in"
        },
        {
            name:"Samba",
            password:bcrypt.hashSync("admin",8),
            isAdmin:false,
            email:"hr@ashokit.in"
        }
    ]
};


module.exports = data;