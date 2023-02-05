const mongoose = require('mongoose')
const schema = mongoose.Schema

const clgdetailsschema = new schema({
    ROLLNO:String,
    CAMPUS:String,
    BRANCH:String,
    SCB_TEAM:Number,
    SCB_CATEGORY:String,
    INTERNSHIPS:[String]
},
{
    collection:"clgdetails"
})


const clgdetailModel = mongoose.model('clgdetails',clgdetailsschema);

module.exports = clgdetailModel;
