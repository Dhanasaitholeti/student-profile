const express = require('express')
const router = express.Router()
const studentmodel = require('../models/student')
const skills = require('../models/skills')
const clgdetails = require('../models/clgdetails')

router.post('/add-user',async (req,res)=>{
    try {
        const skillsresult = await skills.create({
            ROLLNO:req.body.rollno,
            PROGRAMMING_LANGUAGES:req.body.programming_known,
            GITHUB_LINK:req.body.githublink,
            LINKEDIN_LINK:req.body.linkedinlink
        })
        console.log(skillsresult._id)
        const clgdetailsresult = await clgdetails.create({
            ROLLNO:req.body.rollno,
            CAMPUS:req.body.campus,
            BRANCH:req.body.branch,
            SCB_TEAM:req.body.scb_branch,
            SCB_CATEGORY:req.body.scb_category,
            INTERNSHIPS:req.body.internships
        })
        const userresult = await studentmodel.create({
            Name:req.body.Name,
            ROLLNO:req.body.rollno,
            Gender:req.body.Gender,
            MOBILE_NUM:req.body.mobile_no,
            MAIL_ID:req.body.email,
            DOB:req.body.Dob
            
        })

        res.send("user added")
    } catch (error) {
        res.send("error while inserting user"+err.message)
    }
})