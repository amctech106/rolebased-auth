const mongoose = require('mongoose');

const { Schema } = mongoose;

const shopSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: [1, 'Nuksan hojaega soch lo'],
    },
    isOnSale: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        enum: ['vegetable', 'fruit', 'dairy'],
    }
}); 

const Product = mongoose.model('Product', shopSchema);

module.exports = { Product };

module.exports = {
    HOST: "0.0.0.0",
    PORT: 27017,
    DB: "amc tech "
  };