import useFetch from "./useFetch";
import DisplayList from "./DisplatList";
import "../styles/home.css";
import Paginate from "./Paginate";
import Loading from "../components/Loading";
import searchlogo from "../logo/search.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import FilteredList from "./FilteredList";


const Allstudents = () => {
  const [datavalue , setDatavalue] = useState("");
  const handleSearchChange = (e) =>{
    setDatavalue(e.target.value);
  }

  useFetch("http://localhost:8080");
  
  const studata = useSelector((state)=>state.serverdata.data);
  const error = useSelector((state)=>state.serverdata.anyError);
  const isLoading = useSelector((state)=>state.serverdata.isLoading);
  

  return (
    <>

      <div className="searchbar">
      <input type="search" placeholder="Enter the Roll number" onChange={(e) => handleSearchChange(e) } />
      <div className="search-img">
      <img src={searchlogo} alt="search-img"/>
      </div>
      </div>
    


    {error ? (
        <div className="error-logs">Failed to Fetch Data</div>
      ) : isLoading ? (
        <Loading />
        ) : (
          datavalue===""? <DisplayList studata={studata} />:<FilteredList datavalue={datavalue}/>
      )} 
      
      { (studata && datavalue==="")  && <Paginate/>}
    </>
  );
};

export default Allstudents;