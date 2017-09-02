import mongoose from 'mongoose';
import preUpdate from './pre-update';


var schema = mongoose.Schema({
    title: String,
    description: String,
    dateCreated: { type: Date, default: Date.now },
    dateModified: { type: Date, default: Date.now }
});

schema.pre('update', preUpdate);

module.exports = mongoose.model('Articles', schema);