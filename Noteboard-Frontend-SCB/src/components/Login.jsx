import { Link } from "react-router-dom";
import "../styles/login.css"
const Login = () => {
    return ( 
        <>
        <div className="login-area">
            <div className="login-username">
                <p>Username:</p>
                <input type="text" name="username-input" />
            </div>
            <div>
                <p>password:</p>
                <input type="text" name="password-input" />
            </div>
            <div>
                <button><Link to={'/Dashboard'}>Login</Link></button>
            </div>

        </div>
        </>
     );
}
 
export default Login;