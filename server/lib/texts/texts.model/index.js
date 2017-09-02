import mongoose from 'mongoose';

var schema = mongoose.Schema({
    key: String,
    value: mongoose.Schema.Types.Mixed,
    dateCreated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Texts', schema);