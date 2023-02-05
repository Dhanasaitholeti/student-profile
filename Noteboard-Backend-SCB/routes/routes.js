const express = require('express');
const CLDETAILS = require('../models/clgdetails')
const router = express.Router();
const studentmodel = require('../models/student');
const Skillsmodel = require('../models/skills')
router.get('/', async  (req, res) => {
    try{
        const data  =  await studentmodel.find({})
        res.status(200).json(data)
        
    }catch(err){
        res.status(501).json({
            status:"failed to fetch data"
        })
    }
})

router.get('/student/:id',async function(req, res){
    try {
        const data = await studentmodel.where("ROLLNO").equals(req.params.id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            status:"failed to fetch data"
        })
    }
})

router.get('/student/clgdetails/:id',async function (req, res) {
    const id = req.params.id
    try{

        const data = await CLDETAILS.where("ROLLNO").equals(id)
        res.status(200).json(data)
        
    }catch(err){
        res.status(500).json({
            status:"failed to fetch data"
        })
    }
})

router.get('/student/skills/:id',async function (req, res) {
    const id = req.params.id
    try{

        const data = await Skillsmodel.where("ROLLNO").equals(id)
        res.status(200).json(data)
        
    }catch(err){
        res.status(500).json({
            status:"failed to fetch data"
        })
    }
})


module.exports = router;