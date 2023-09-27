const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolTrainersSchema = new Schema ({
    
    First_Name: {
        type: String ,
        required: true,
    },
    
    Last_Name: {
        type: String ,
        required: true,
    },
        
    Email_Id: {
        type: String ,
        required: true,
        unique: true
    },
    
    Contact_Number: {
        type: String ,
        required: true
    },
    
    Module_ID: {
        type: String , 
        required: true,
        unique: true,

    },
    
    Password: {
        type: String ,
        required: true
    }
});