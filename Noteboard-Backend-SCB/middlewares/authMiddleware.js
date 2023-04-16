const jwt = require('jsonwebtoken')
const studentmodel = require('../models/student')


const protect = async (req,res,next) => {
    let token
     if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')
     ){
        try {
            //get the token from the request header
            token = req.headers.authorization.split(' ')[1]

            //verify the token 
            const decoded = jwt.verify(token,"Thisisasecret")
            
            //get the user from the token
            req.user = await studentmodel.findById(decoded.id)  
            next()
            
        } catch (error) {
            res.json({ 
                message:"you are not authorised"
            })
        }
     }
     else{
        console.log("There is no Token")
        res.send("You are not authorized to access.")
     }
}


module.exports = protect; 