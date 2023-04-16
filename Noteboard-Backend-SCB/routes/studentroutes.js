const express  = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');

const {
    getstudent , 
    getstudentclgdetails ,
    getstudentskillsdetails 
    } = require('../controllers/studentControllers');

//individual student data
router.get('/:id', protect ,getstudent)

//individual student clgdeatils
router.get('/clgdetails/:id', protect ,getstudentclgdetails);

//individual student skills and social media links
router.get('/skills/:id' , protect ,getstudentskillsdetails)

module.exports = router;