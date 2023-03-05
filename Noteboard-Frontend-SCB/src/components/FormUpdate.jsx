import { useState } from "react"
import axios from "axios"
import "../styles/Form.css"

const FormUpdate = () => {
    const [details,setDetails] = useState({
        Name:"",
        rollno:"",
        DOB:"",
        Gender:"",
        mobile_no:"",
        email:"",
          
    })
    const handleonChange = (e) => {
        setDetails({...details,[e.target.name]:e.target.value})
    }
    const handlesubmitbtn =async () => {
        try{

            const result = await axios.post("http://localhost:8080/test",{
                Name:details.Name,
                rollno:details.rollno,
                DOB:details.DOB,
                Gender:details.Gender,
                mobile_no:details.mobile_no,
                email:details.email
            })
            console.log(result)
        }catch(err){
            console.log(err)
        }

    }
    return (

        <div className="form-group">
            <label htmlFor="Name">
                Name:
                <input type="text" name="Name" id="Name" onChange={handleonChange} />
            </label>
            <label htmlFor="rollno">
                Roll_No:
                <input type="text" name="rollno" id="rollno" onChange={handleonChange} />
            </label>
            <label htmlFor="DOB">
                DOB:
                <input type="date" name="DOB" id="DOB" onChange={handleonChange}/>
            </label>
            <label htmlFor="Gender" id="gender-sec">
                Gender:
                <select name="Gender" id="Gender" onChange={handleonChange}>
                    <option value="">-------</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>

            <label htmlFor="mobile_no">
                Contact_Number:
                <input type='text' name="mobile_no" id="mobile_no" onChange={handleonChange} />
            </label>

            <label htmlFor="email">
                Email:
                <input type="email" name="email" id="email" onChange={handleonChange} />
            </label>
            <button onClick={handlesubmitbtn}>submit</button>
      
    </div>
      );
}
 
export default FormUpdate;