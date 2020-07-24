const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Persons = new Schema({
    name: {
        type: String
    },
    class: {
        type: String
    },
    age: {
        type: Number
    }
},{
    collection: 'persons'
});

module.exports = mongoose.model('Persons', Persons);