const serverdata = "data_from_server";
const Err = "update_err_state";
const Loading = "update_loading_state";
const filtereddata = "filtered_data";

export const updatedata = (ogData) => ({
    type:serverdata,
    ogData
})
export const updaterr = (err)=>({
    type:Err,
    err
})
export const updateLoad = (loading)=>({
    type:Loading,
    loading
})
export const updatefilteredlist = (arrdata) => ({
    type:filtereddata,
    arrdata
})

const initialstate = {
    data : undefined,
    keysdata:undefined,
    isLoading:true,
    anyError:false
}

const mainFunction = (state = initialstate , action) => { 
    switch(action.type){
        case serverdata:
            return{...state,data:action.ogData}

        case Err:
            return{...state,anyError:action.err}

        case Loading:
            return{...state,isLoading:action.loading}
        
        case filtereddata:
            return{...state,keysdata:action.arrdata}
            
        default:
            return {...state}
     }
}

export default mainFunction;

