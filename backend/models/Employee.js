const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        minLength: 3,
        maxLength: 50,
    },
});


const EmployeeModel = mongoose.model("Employee", EmployeeSchema);

module.exports = EmployeeModel;
