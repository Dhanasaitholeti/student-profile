import { useSelector } from "react-redux";
import Cards from "./Cards";



const DisplayList = (props) => {

  const { studata } = props;
  const arrofkeys = Object.keys(studata);

  const pageCount = useSelector((state)=>state.pagecount.count)
  let page_start = (pageCount-1)*30;
  let page_end = (pageCount*30);
  let newarr = arrofkeys.slice(page_start,page_end)



  return (
    <>
    <Cards  newarr={newarr}/>
    </>
  );
};






export default DisplayList;