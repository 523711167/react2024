export default function countReduce(preState=0, action) {
    console.log('preState =', preState)
    console.log('action =', action)
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