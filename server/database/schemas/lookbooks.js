/**
 * Our Schema for Look Books
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the lookBook Schema
var lookBookSchema = new Schema({
    titre: String,
    description: String,
    image: String,
    astuce: String,
});

// The primary lookBook model
var Lookbook = mongoose.model('Lookbook', lookBookSchema);

module.exports = Lookbook;