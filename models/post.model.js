const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 60,
        // unique: true
    },
    content: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1000,
        // unique: true
    },
    imagePath: {
        type: String,
        required: true,
        validate: {
            validator: (imagePath) => {
                return imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:image/png;base64,') || imagePath.startsWith('data:image/jpeg;base64,') || imagePath.endsWith('png') || imagePath.endsWith('jpeg') || imagePath.endsWith('jpg');
            }
        }
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Post', postSchema);