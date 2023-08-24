import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

import countReduce from "./reduce/count";
import personReduce from "./reduce/person";


export default createStore(combineReducers({
    count: countReduce,
    person: personReduce
}), composeWithDevTools(applyMiddleware(thunk)))
