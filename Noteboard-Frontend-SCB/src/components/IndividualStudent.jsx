import { Link, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import DisplayIndividual from "./DisplayIndividual"
import Loading from "./Loading";
import { useSelector } from "react-redux";


const IndividualStudent = () => {
  const { id } = useParams();
  const url ="http://localhost:8080/student/" + id;
  
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
        (studata) && <DisplayIndividual studata={studata} id={id}/>
      )}
      <div className="changeButtons">
        <button><Link to={`/student/clgdetails/${id}`}>clg-details</Link></button>
        <button><Link to={`/student/skills/${id}`}>Skills</Link></button>
      </div>
    </div>
  );
};

export default IndividualStudent;