import "../styles/loading.css"
import loadinglogo from "../images/chocobcoco.gif";
const Loading = () => {
    return ( 
        <div className="loading-scrn">
            <div className="img-loading">
                    <img src={loadinglogo} alt="" />
            </div>
            <h1>Loading....</h1>
        </div>
     );
}
 
export default Loading;