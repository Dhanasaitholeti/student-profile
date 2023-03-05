const express  = require('express');
const router = express.Router();

const {
    getstudent , 
    getstudentclgdetails ,
    getstudentskillsdetails 
    } = require('../controllers/studentControllers')

//individual student data
router.get('/:id',getstudent)

//individual student clgdeatils
router.get('/clgdetails/:id',getstudentclgdetails);

//individual student skills and social media links
router.get('/skills/:id',getstudentskillsdetails)

module.exports = router;