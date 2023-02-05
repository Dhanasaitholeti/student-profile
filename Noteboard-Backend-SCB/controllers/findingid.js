const skillsmodel = require('../models/skills')



const mainId = async ({rno}) => {
        try{
            const data = await skillsmodel.find({"ROLLNO":rno})
            console.log((data[0]._id.toString()))
        }catch(err){
            console.log(err)
        }
}



module.exports = mainId