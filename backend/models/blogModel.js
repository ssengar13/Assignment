const mongoose = require('mongoose'); 
const { Schema } = mongoose;
const ObjectId = Schema.Types.ObjectId;

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{
    toJSON:{
        virtuals: true,
    },
    toObject:{
        virtuals: true,
    },
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);