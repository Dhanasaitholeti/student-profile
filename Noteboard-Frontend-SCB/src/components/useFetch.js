import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatedata , updateLoad , updaterr , updatefilteredlist } from "../redux/ducks/serverData";
import Getkeys from "./Getkeys";
import axios from "axios";
import Cookies from "js-cookie";

const DataFormat = (data) => {
    const  dummyobj= {}
    for(let i = 0 ; i< data.length ; i++) {
        dummyobj[data[i].ROLLNO] = data[i];
    }
    return ( dummyobj );
}

const useFetch = (url) => {
    const token = Cookies.get("Token")
    const dispatcher = useDispatch();

    useEffect(()=>{
        axios.request({
            method: 'GET',
            url:url,
            headers:{
                contentType: 'application/json',
                Authorization: `Bearer ${token}`
            }
        })
        .then((data)=>{
            console.log(data.data);
            const formatteddata = DataFormat(data.data)
            dispatcher(updatedata(formatteddata))
            dispatcher(updatefilteredlist(Getkeys(data.data)))  
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