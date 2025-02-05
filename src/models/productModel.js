const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, enum:['Frutas','Verduras','Lacteos'], required: true},
    brand: {type: String, required: true},
    quantity: {type: Number, default: 0},
    createAt: {type: Date, default: Date.now},
    image: {type: [String], required: true},
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
