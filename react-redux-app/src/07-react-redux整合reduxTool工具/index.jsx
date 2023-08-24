import React, {Component} from 'react';
import store from "./redux/store";
import {Provider} from "react-redux";

import Count from "./containers/Count";
import Person from "./containers/Person";

/**
 * export default createStore(combineReducers({
 * count: countReducer,
 * person: personReducer
 * }), composeWithDevTools(applyMiddleware(thunk)))
 */
class Index extends Component {

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Count/>
                    <br/>
                    <Person/>
                </Provider>
            </div>
        );
    }
}

export default Index;