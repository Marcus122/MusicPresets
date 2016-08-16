const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const compressorSchema = new Schema({
    name:{type:String},
    attack:{type:Number,min:0},
    release:{type:Number,min:0},
    threshold:{type:Number},
    ratio:{type:String,
        validate: {
          validator: function(v) {
            return /^[0-9]+:[0-9]+$/.test(v);
          },
          message: '{VALUE} is not a valid ratio'
        }
    },
    presence:{type:Number},
    makeUp:{type:Number}
});

//Create the model class
const ModelClass = mongoose.model('compressor',compressorSchema);

//Export the model
module.exports = ModelClass;