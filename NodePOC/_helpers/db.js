
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sahildb');
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/model')
};
