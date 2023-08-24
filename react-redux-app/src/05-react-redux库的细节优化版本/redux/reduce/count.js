import {ADD, SUB} from "../constant";

export default function countReduce(preState=0, action) {
    let { type, data } = action;
    switch (type) {
        case ADD:
            return preState + data
        case SUB:
            return preState - data;
        default:
            return preState
    }
};