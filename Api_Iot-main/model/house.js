const mongoose = require("mongoose");

const houseSchema = mongoose.Schema({
  id:{type:Number , required:true},
  temperature: { type: Number, required: true },
  humidité : {type : Number , require : true} , 
  port1: { type: Boolean, required: true },
  port2: { type: Boolean , required:true},
  port3: { type: Boolean , required:true},
  climatiseur : {type : Boolean , required: true},
  chauffage : {type : Boolean , required:true},
  lumiere : {type : Boolean , required:true} 
 
  
});
module.exports = mongoose.model("House_Etat ", houseSchema);
