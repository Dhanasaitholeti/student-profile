const mongoose = require('mongoose')
const Dateonly = require('mongoose-dateonly')(mongoose)
const schema = mongoose.Schema;
const clgdetials = require('./clgdetails')


const studentschema = new schema({
    Name:String,
    ROLLNO:String,
    Gender:String,
    MOBILE_NUM:Number,
    MAIL_ID:String,
    DOB:Date,
    CLG_DETAILS:{
        type:mongoose.Schema.Types.ObjectId,  
        ref:"clgdetials"
    },
    SKILLS:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"skills"
    }
},
{
    collection:"students"
})

const studentsmodel = mongoose.model('students',studentschema)

module.exports = studentsmodel;