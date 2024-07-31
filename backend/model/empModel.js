const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
    pno: String,
    name: String,
    city: String,
    price: Number
});

module.exports = mongoose.model("employe", employeSchema);
