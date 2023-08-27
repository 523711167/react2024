import React, {useContext} from 'react';

/**
 * 函数式组件可以通过两种方式获取context
 * @Author pxx
 * @DATA 2023/8/28 00:19
 */
const Context = React.createContext("默认的拼刀刀");
const { Provider, Consumer } = Context;
function Index() {
    
    return (
        <div>
            我是爷爷组件
            <Provider value={"彭小曦"}>
                <Parent/>    
            </Provider>
        </div>
    )
}

export default Index;

function Parent() {
    return (
        <div>
            我是父亲组件
            <Children/>
            <Children2/>
        </div>
    )
}

function Children() {
    return (
        <div>
            <Consumer>
                {
                    value => `我是儿子组件，我收到Provider传递的value=${value}`
                }
            </Consumer>

        </div>
    )
}

function Children2() {

    const name = useContext(Context);

    return (
        <div>
            <Consumer>
                {
                    value => `我是儿子组件，我收到Provider传递的value=${name}`
                }
            </Consumer>

        </div>
    )
}