// app/models/todo.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');

module.exports = mongoose.model('Resto', {
    name : String,
    tel : String,
    location : String
});
