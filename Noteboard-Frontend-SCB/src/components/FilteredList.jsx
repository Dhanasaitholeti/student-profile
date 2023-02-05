import { useSelector } from "react-redux";
import Cards from "./Cards";

const FilteredList = ({datavalue}) => {
    const keysarr = useSelector((state)=>state.serverdata.keysdata)

   const mainarr =  keysarr.filter(val=>{ return val.includes(datavalue) }) 

   
    return ( 
       <>
       {mainarr.length >0 ?<Cards  newarr={mainarr}/>:<div className="error-logs">No records Found</div>}
       </>
     );
}

export default FilteredList;