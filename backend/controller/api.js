const Employee = require('../models/Employee');

exports.createUser = async(req, res)=>{
    try {
        // console.log(req.body);
        console.log('Execution stated')
        const {email, name, password} = req.body
        let employee = new Employee({name: name, email: email, password: password});
        await employee.save()
        console.log('Execution end');
        res.status(200).json({status: true, data: "OKay", error: ""})
    } catch (error) {
        res.status(500).json({status: false, data: "", error: error.message})
    }
}

// delete user
exports.deleteUser = async(req, res)=>{
    try {
        // console.log(req.body);
        console.log('Execution stated')
        const {id} = req.query
        console.log(req.params, req.query)
        let employee = await Employee.findByIdAndDelete(id);
        if(employee){
            res.status(200).json({status: true, data: employee, error: ""})
        }
        else{
            res.status(200).json({status: false, data: "Not Okay", error: "Unsuccessfull User not exist/found"})
        }
        console.log('Execution end')

    } catch (error) {
        res.status(500).json({status: false, data: "", error: error.message})
    }
}

// get all the user
exports.getUser = async(req, res)=>{
    try {
        // console.log(req.body);
        console.log('Execution stated')
        
        let employee = await Employee.find();
        console.log(employee)
        
        console.log('Execution end')

        res.status(200).json({status: true, data: employee, error: ""})
    } catch (error) {
        res.status(500).json({status: false, data: "", error: error.message})
    }
}
// get all the user
exports.getUserByName = async(req, res)=>{
    try {
        // console.log(req.body);
        console.log('Execution stated')
        let {name} = req.body
        let employee = await Employee.find({name: name});
        console.log(employee)
        
        console.log('Execution end')

        res.status(200).json({status: true, data: employee, error: ""})
    } catch (error) {
        res.status(500).json({status: false, data: "", error: error.message})
    }
}
