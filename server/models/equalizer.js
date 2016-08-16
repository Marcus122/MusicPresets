const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equalizerConfig = {
    band:{type:Boolean},
    peakShelf:{type:String, enum : [ 'peak', 'shelf' ] },
    freq:{type:Number},
    gain:{type:Number},

}

const equalizerMidConfig = {
    band:{type:Boolean},
    q:{type:String, enum : [ 'hi', 'low' ]},
    freq:{type:Number},
    gain:{type:Number}
}

//Define our model
const schema = {
    name:{type:String, required:true},
    low:{
        mid:{}
    },
    high:{
        mid:{}
    }
};

Object.assign(schema.low,equalizerConfig);
Object.assign(schema.low.mid,equalizerMidConfig);

Object.assign(schema.high,equalizerConfig);
Object.assign(schema.high.mid,equalizerMidConfig);

const eqSchema = new Schema(schema);

//Create the model class
const ModelClass = mongoose.model('equalizer',eqSchema);

//Export the model
module.exports = ModelClass;