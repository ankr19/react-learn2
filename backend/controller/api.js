const Employee = require('../models/Employee');

exports.createUser = async(req, res)=>{
    try {
        // console.log(req.body);
        console.log('Execution stated')
        const {email, name, password} = req.body
        let employee = new Employee({name: name, email: email, password: password});
        await employee.save()
        console.log('Execution end')

        res.status(200).json({status: true, data: "OKay", error: ""})
    } catch (error) {
        res.status(500).json({status: false, data: "", error: error.message})
    }
}