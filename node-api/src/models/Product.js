const moongose = require('mongoose');

const ProductSchema = new moongose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});     


moongose.model('Product', ProductSchema);