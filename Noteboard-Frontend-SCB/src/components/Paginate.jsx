import "../styles/paginate.css"
import {useDispatch} from "react-redux"
import {updateValue} from "../redux/ducks/pageCount"


const Pagination = () => {
    const dispatcher = useDispatch();
    const arr = [1,2,3];
    return ( 
        <section className="pageCount">
            { arr.map((page) =>{
                return <button key={page} className="individual-btn"
                onClick={
                    () => dispatcher(updateValue(`${page}`))}>
                    {page}
                    </button>
            })
            }
        </section>
      
     );
}
 
export default Pagination;