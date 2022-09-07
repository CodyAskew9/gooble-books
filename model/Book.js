const mongoose = require("mongoose")

const Schema = new Schema({
    title: {
        type: String, 
        required: true,
    },
    authors: {
        type: Array,
        required: true,
    },
    description: { type: String},
    image: { type: String},
    link: { type: String}
})