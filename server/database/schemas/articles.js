/**
 * Our Schema for Look Books
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define the lookBook Schema
var articleSchema = new Schema({
    reference: { type: String, required: true },
    nom: { type: String, required: true },
    type: String,
    prix: Number,
    tags : { type: [String], index: true } ,
    composition : String,
    tailles : [String],
    couleurs : [String],
    photos  : [String],
    disponibilite : Number,
    imageRef : String,
    dateCreation : Date
});

// The primary lookBook model
var Article = mongoose.model('Article', articleSchema);

module.exports = Article;