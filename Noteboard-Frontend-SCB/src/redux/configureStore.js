import {createStore , combineReducers} from "redux"
import PageCount from "./ducks/pageCount"
import Serverdata from "./ducks/serverData"
const reducer = combineReducers({
    pagecount:PageCount,
    serverdata:Serverdata
})
const store = createStore(reducer);

export default store;