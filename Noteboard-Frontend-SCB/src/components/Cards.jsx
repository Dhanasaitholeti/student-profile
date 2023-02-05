import womanlogo from "../logo/woman.png"
import manlogo from "../logo/man.png"
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const Cards = ({newarr}) => {
    const studata = useSelector((state)=>state.serverdata.data)
    return ( 
    <div className="Alllist">
      {newarr.map((key) => {
        return (
          <div key={key} className="individual-card">
            <div className="individual-card-img"><img src={studata[key].Gender==="Female"?womanlogo:manlogo} alt="" /></div>
            <h2>{`${studata[key].Name}`}</h2>
            <h2>{`${studata[key].ROLLNO}`}</h2>
            <button className="btn-details"><Link to={`/student/${key}`}>Show Details</Link></button>
          </div>
        );
      })}
    </div>
     );
}
 
export default Cards;