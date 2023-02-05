const mongoose = require('mongoose');
const schema = mongoose.Schema;

const skillsmodel = new schema({
    ROLLN:String,
    PROGRAMMING_LANGUAGES:[String],
    GITHUB_LINK:String,
    LINKEDIN_LINK:String
},
{
    collection:"skills"
}
)

const skills = mongoose.model('skills',skillsmodel);


module.exports = skills;