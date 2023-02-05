import womenlogo from "../logo/woman.png";
import menlogo from "../logo/man.png";
import "../styles/individual.css";

const DisplayIndividual = ({studata,id}) => {
    // const [showpt,setShowPt] = useState(false)
    // const [stateofpt,setStateofPt] = useState("show-pic")   
    // const toggle = () => {
    //     showpt?setShowPt(false):setShowPt(true);
    //     stateofpt==="show-pic"?setStateofPt("hide-pic"):setStateofPt("show-pic");
    // <button onClick={() => toggle()}>{`${stateofpt}`}</button>
    //     //showpt ? `http://61.1.171.141/kiet/05photos/${studata.ID}.jpg` 
    // }

    return (
        <div className="Main-sec">
            {console.log(studata)}
            <div className="logo-img" >
                    <img src={ studata[id].Gender==="Female"?womenlogo:menlogo } alt="" /> 
                    
            </div>
        <div className="student-details">

            <section className="stu-name">
            <legend>Name:</legend>
            <p>{studata[id].Name}</p>
            </section>
            
            <section className="stu-roll">
            <legend>Roll Number:</legend>
            <p>{studata[id].ROLLNO}</p>
            </section>

            <section className="stu-gen">
            <legend>Gender:</legend> 
            <p>{studata[id].Gender}</p>
            </section>

            <section className="stu-DOB">
            <legend>Gender:</legend> 
            <p>{studata[id].DOB.slice(0,10)}</p>
            </section>

            <section className="stu-contact">
            <legend>Contact Number:</legend>
            <p>{studata[id].MOBILE_NUM}</p>
            </section>

            <section className="stu-Email">
            <legend>Email Id:</legend>
            <p>{studata[id].MAIL_ID}</p>
            </section>
            
        </div>
        </div>
     );
}
 
export default DisplayIndividual;