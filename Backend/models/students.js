const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LogicpoolStudentsSchema = new Schema ({

  Name: {
    type: String ,
    required: true
  },

  Email: {
    type: String ,
    required: true
  },

  Password: {
    type: String ,
    required: true
  }
});

const LogicpoolStudents = mongoose.model("LogicpoolStudents" , LogicpoolStudentsSchema )
module.exports = LogicpoolStudents;