export default function countReduce(preState=0, action) {
    let { type, data } = action;
    switch (type) {
        case 'add':
            return preState + data
        case 'sub':
            return preState - data;
        default:
            return preState
    }
};