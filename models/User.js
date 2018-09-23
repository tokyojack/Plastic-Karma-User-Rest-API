// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var productSchema = new Schema({
    email: { type: String, unique:true, required: true },
    password: { type: String, required: true },
    current_score: { type: Number, required: true },
    waste_score: { type: Number, required: true },
    prior_month_score: { type: Number, required: true },
});

var Product = mongoose.model('User', productSchema);

module.exports = Product;
