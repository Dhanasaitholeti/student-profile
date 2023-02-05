import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import DisplaySkills from "./DisplaySkills";
import Loading from "./Loading";
import useFetch from "./useFetch";


const DSkills = () => {
    const {id} = useParams();
    const url = 'http://localhost:8080/student/skills/'+id;

    useFetch(url);

    const studata = useSelector((state)=>state.serverdata.data);
    const error = useSelector((state)=>state.serverdata.anyError);
    const isLoading = useSelector((state)=>state.serverdata.isLoading);

    return ( 
        <div>
      {error ? (
        <div className="error-logs">Failed to Fetch Data</div>
      ) : isLoading ? (
         <Loading/>
        ) : (
        (studata) && <DisplaySkills studata={studata} id={id}/>
      )}
      <div className="changeButtons">
        <button><Link to={`/`}>Home</Link></button>
        
      </div>
    </div>
     );
}
export default DSkills;