import { applyMiddleware, legacy_createStore as createStore } from "redux";
import countReduce from "./count_reduce";
import thunk from "redux-thunk";

export default createStore(countReduce, applyMiddleware(thunk))
