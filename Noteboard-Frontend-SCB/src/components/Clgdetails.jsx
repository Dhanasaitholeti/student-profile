import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import DisplayClgDetails from "./DisplayClgDetails";
import Loading from "./Loading";
import useFetch from "./useFetch";


const Clgdetails = () => {
    const {id} = useParams();
    const url = 'http://localhost:8080/student/clgdetails/'+id;

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
        (studata) && <DisplayClgDetails studata={studata} id={id}/>
      )}
      <div className="changeButtons">
        <button><Link to={`/`}>Home</Link></button>
        <button><Link to={`/student/skills/${id}`}>Skills</Link></button>
      </div>
    </div>
     );
}
 
export default Clgdetails;