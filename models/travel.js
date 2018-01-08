var mongoose = require('mongoose');

var travelSchema = mongoose.Schema({

    idUser: { type: String, required: true},
    starting : { type: String, required: true},
    arrival : String,
    lat : String,
    long : String,
    placesAvailable: String,
    busyPlaces:String,
    active:String,
    startingData:String},
    {
    versionKey: false

});

module.exports = mongoose.model('Travel', travelSchema);
