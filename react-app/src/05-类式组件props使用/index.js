import React, {Component} from 'react';

class Index extends Component {

    render() {
        return (
            <div>
                <Person name={"张三"} age={18} sex={"女"}/>
            </div>
        );
    }
}

export default Index;


class Person extends Component {

    render() {
        let { name, age, sex } = this.props
        return (
            <div>
                我叫{name}，今年{age}岁,性别{sex}
            </div>
        );
    }
}

/**
 * 1.Props传递也可以使用{...person}
 * 2.constructor(props) {
 *         super(props);
 *     }的意义在于,在构造函数this.props可以获取
 */