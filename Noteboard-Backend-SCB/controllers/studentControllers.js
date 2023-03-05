const CLGDETAILS = require('../models/clgdetails')
const studentmodel = require('../models/student');
const Skillsmodel = require('../models/skills')


const getstudent = async function(req, res){
    try {
        const data = await studentmodel.where("ROLLNO").equals(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            status:"failed to fetch data"
        })
    }
}

const getstudentclgdetails = async function (req, res) {
    const id = req.params.id
    try{

        const data = await CLGDETAILS.where("ROLLNO").equals(id)
        res.status(200).json(data)
        
    }catch(err){
        res.status(500).json({
            status:"failed to fetch data"
        })
    }
}


const getstudentskillsdetails = async function (req, res) {
    const id = req.params.id
    try{

        const data = await Skillsmodel.where("ROLLNO").equals(id)
        res.status(200).json(data)
        
    }catch(err){
        res.status(500).json({
            status:"failed to fetch data"
        })
    }
}


module.exports = {
    getstudent,
    getstudentclgdetails,
    getstudentskillsdetails
}
