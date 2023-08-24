import {ADD, SUB} from "./constant";

export const createAddAc = data => ({ type: ADD, data })
export const createSubAc = data => ({ type: SUB, data })