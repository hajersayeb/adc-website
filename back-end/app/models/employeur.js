const mongoose = require("mongoose");
const Employeur = mongoose.model(
    "Employeur",
    new mongoose.Schema({
        username:{
            type:String,
            require : true,
            unique : true,
                    
            },
         email:{
             type : String,
             require : true,
             unique : true,
         }, 
 
         password:{
            type :String, 
            require : true,           
         }, 
 roles: [
     {
         type:mongoose.Schema.Types.ObjectId,
         ref:"Role"        
     }
 ]
    })
);
module.exports = Employeur;
