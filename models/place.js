const mongoose = require("mongoose")
var Schema = mongoose.Schema

const place = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    summary: String,
    notes: String, 
    price: String, 
    amenities: Array,
    beds: Number
}, {collection: "listingsAndReviews"})

module.exports = mongoose.model('place', place)