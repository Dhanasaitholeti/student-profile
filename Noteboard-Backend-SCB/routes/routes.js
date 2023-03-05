const express = require('express');
const  protect  = require('../middlewares/authMiddleware.js')
const router = express.Router();
const studentmodel = require('../models/student');
const skills = require('../models/skills')
const clgdetails = require('../models/clgdetails')
const jwt = require('jsonwebtoken')


//generate jwt token
const generatetoken = (id) => {
    return jwt.sign({id},"Thisisasecret",{
        expiresIn:'1d'
    })
}

//route to check the user login
router.post('/login', async (req, res)=>{
    email = req.body.Email;
    passwd = req.body.password;
    console.log(req.body)
    try{
        const userdata = await studentmodel.findOne({ MAIL_ID:email , ROLLNO:passwd })
        if(!userdata){
            res.status(401).json({ message:"No user exists"})
        }
        res.status(201).json({ 
            message: "login success",
            userdata,
            token:generatetoken(userdata._id)
        })
    }
    catch(err){
        console.log(err);
    }

})

router.get('/me', protect ,async (req,res)=>{

    try {
        const data = await  studentmodel.findById(req.user.id)
        console.log(data)


        res.json({
            id:data._id,
            name:data.Name,
            ROLLNO:data.ROLLNO
        })
       
    } catch (error) {
        console.log(error);
    }
    
})


//allstudent data route
router.get('/Dashboard', async  (req, res) => {
    try{
        const data  =  await studentmodel.find({})
        res.status(200).json(data)
        
    }catch(err){
        res.status(501).json({
            status:"failed to fetch data"
        })
    }

})

router.post('/add-user',  async (req,res)=>{
    try {
        const skillsresult = await skills.create({
            ROLLNO:req.body.rollno,
            PROGRAMMING_LANGUAGES:req.body.programming_known,
            GITHUB_LINK:req.body.githublink,
            LINKEDIN_LINK:req.body.linkedinlink
        })
        console.log(skillsresult)
        const clgdetailsresult = await clgdetails.create({
            ROLLNO:req.body.rollno,
            CAMPUS:req.body.campus,
            BRANCH:req.body.branch,
            SCB_TEAM:req.body.scb_branch,
            SCB_CATEGORY:req.body.scb_category,
            INTERNSHIPS:req.body.internships
        })
        console.log(clgdetailsresult)
        const userresult = await studentmodel.create({
            Name:req.body.Name,
            ROLLNO:req.body.rollno,
            Gender:req.body.Gender,
            MOBILE_NUM:parseInt(req.body.mobile_no),
            MAIL_ID:req.body.email,
            DOB:req.body.Dob,
            SKILLS:skillsresult._id.toString(),
            CLG_DETAILS:clgdetailsresult._id.toString()
            
        })
        console.log(userresult)
        res.send(userresult)
    } catch (error) {
        res.send("error while inserting user"+err.message)
    }
})


module.exports = router