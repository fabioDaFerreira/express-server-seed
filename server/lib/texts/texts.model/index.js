import mongoose from 'mongoose';

var schema = mongoose.Schema({
    key: String,
    value: mongoose.Schema.Types.Mixed
});

module.exports = mongoose.model('Texts', schema);