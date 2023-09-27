const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolStudentsSchema = new Schema ({

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

  Contact_Number:{
    type: String ,
    required: true,
  },

  Address: {
    type: String ,
    required: true,
  },

  Password: {
    type: String ,
    required: true
  }
});

const LogicpoolStudents = mongoose.model("LogicpoolStudents" , LogicpoolStudentsSchema )
module.exports = LogicpoolStudents;


