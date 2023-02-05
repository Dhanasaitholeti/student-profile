const UPDATE = "update";

export const updateValue = (data) =>({
    type: UPDATE,
    data
})

const initialState= {
    no_of_pages : 3,
    count : 1
}

const mainFunction = (state = initialState  , action) => { 
        switch (action.type) {
            case UPDATE:
                return{...state,count:action.data}
            default:
                return {...state}
        }
}

export default mainFunction;