import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatedata , updateLoad , updaterr , updatefilteredlist } from "../redux/ducks/serverData";
import Getkeys from "./Getkeys";

const DataFormat = (data) => {
    const  dummyobj= {}
    for(let i = 0 ; i< data.length ; i++) {
        dummyobj[data[i].ROLLNO] = data[i];
    }
    return ( dummyobj );
}

const useFetch = (url) => {
    const dispatcher = useDispatch();

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            const formatteddata = DataFormat(data)
            dispatcher(updatedata(formatteddata))
            dispatcher(updatefilteredlist(Getkeys(data)))  
            dispatcher(updateLoad(false))
           
        })
        .catch((error)=>{
            dispatcher(updaterr(true))
        })
        return ()=>{
            dispatcher(updatedata(undefined))
            dispatcher(updateLoad(true))
        }
    },[url,dispatcher])
}
 
export default useFetch;