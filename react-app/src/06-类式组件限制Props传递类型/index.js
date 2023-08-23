import React, {Component} from 'react';
import PropTypes from "prop-types";

class Index extends Component {

    render() {
        return (
            <div>
                <Person age="18" sex={"女"}/>
            </div>
        );
    }
}

export default Index;


class Person extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.string
    }

    static defaultProps = {
        sex: '女',
        age: 17,
        name: "萌萌"
    }

    render() {
        let { name, age, sex } = this.props
        return (
            <div>
                我叫{name}，今年{age}岁,性别{sex}
            </div>
        );
    }
}