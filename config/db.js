const mongoose = require('mongoose');

const mongo = () => {
    mongoose.connect("mongodb://localhost:27017/project").then(() => {
        console.log("Connection Sucessfull ...");
    }).catch((err) => {
        console.log(err);
    });
}
module.exports = mongo;