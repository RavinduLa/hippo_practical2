//property model.js

var mongoose = require('mongoose');

//schema
var propertySchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    roomPrice: {
        type: Number,
        required: true
    },
    mealType: {
        type: String,
        required: true
    },
    mealPrice: {
      type: Number,
      required: true
    },
    totalPrice: {
        type: Number,
        required: true
    }
});

var Property = module.exports= mongoose.model('property', propertySchema);

module.exports.get= function (callBack, limit){
    Property.find(callBack).limit(limit);
}

