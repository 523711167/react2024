# Getting Started with redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn add redux`

下载Redux库

### `yarn add redux-thunk`

redux-thunk库，store.dispatch(action),当action是函数对象的时候需要中间件

### `yarn add react-redux`

react整合redux的库

### `yarn add redux-devtools-extension`

react开发者工具整合包
export default createStore(combineReducers({
count: countReducer,
person: personReducer
}), composeWithDevTools(applyMiddleware(thunk)))

### `yarn add react-redux`

react整合redux包