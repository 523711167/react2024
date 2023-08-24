import {ADD, SUB} from "../constant";

export const createAddAc = data => ({ type: ADD, data })
export const createSubAc = data => ({ type: SUB, data })
export const createSubSyncAc = data => dispatch => setTimeout(() => dispatch(createAddAc(data)), 1000)