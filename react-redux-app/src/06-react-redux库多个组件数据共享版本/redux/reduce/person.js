import {ADDPERSON} from "../constant";

const initstate = [{id: '1', username: '拼夕夕', age: 18}]
export default function personReduce(preState=initstate, action) {
    let { type, data } = action;
    switch (type) {
        case ADDPERSON:
            return [...preState, ...data]
        default:
            return preState
    }
};