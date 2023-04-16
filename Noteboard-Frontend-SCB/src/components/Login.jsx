import { useState } from "react";
import {  useNavigate } from "react-router-dom";
// import { useSelector,useDispatch } from "react-redux";
// import { updatedLoggin } from "../redux/ducks/serverData";
import "../styles/login.css"
import axios from "axios";

const Login = () => {

const navigate = useNavigate();
const [loggin,setLoggedin] = useState(false)
const [logindata,setLogindata] = useState({
    email:"",
    passwd:""
})
console.log(localStorage.getItem('isLogin'))
const handleonchange = (e) => {
    setLogindata({...logindata,[e.target.name]:e.target.value})
}

const handleloginclick =  async () =>{
        try{
            const res = await axios.post("https://studentprofilebackend.onrender.com/login",{
                Email:logindata.email,
                password:logindata.passwd
            })
            
            if(res.data==="No records Found"){    
                localStorage.setItem('isLogin',false)
                alert("Enter the correct credentials")
            }
            else{
                localStorage.setItem('isLogin',true)
                if(res.data){
                    setLoggedin(true)
                    console.log("he is an admin")
                    navigate('/Dashboard')
                }
                navigate('/dashboard')
            }
        }
        catch(err){
            console.log(err);
        }
        
    }

    return ( 
        <>
       <div className="login-area">
            
                <div className="login-username">
                    <p>Username:</p>
                    <input 
                    type="text" 
                    name="email" 
                    id="email"
                    onChange={(e)=>handleonchange(e)}
                     />
                </div>
                <div>
                    <p>password:</p>
                    <input 
                    type="text" 
                    name="passwd" 
                    id="passwd"
                    onChange={(e)=>handleonchange(e)}
                     />
                </div>
                <div>
                    <button onClick={handleloginclick}>Login</button>
                </div>

            </div>
          </>
     );
}
 
export default Login;