import React, {Component} from 'react';
import {connect} from "react-redux";

import { createAddPersonAc } from "../../redux/action/person";

class PersonUI extends Component {

    render() {
        let { person } = this.props
        return (
            <div>
                <h1>我是Person组件  计算结果 {this.props.count}</h1>
                姓名<input ref={ node => this.username = node } type="text" />
                年龄<input ref={ node => this.age = node } type="text" />
                <button onClick={this.addPerson}>添加人员</button>
                <ul>
                    {
                        person.map((val) => {
                            return (
                                <ul key={val.id}>
                                    <li>{val.id}</li>
                                    <li>{val.username}</li>
                                    <li>{val.age}</li>
                                </ul>
                            )

                        })
                    }

                </ul>
            </div>
        );
    }

    addPerson = () => {
        this.props.addPerson(
            [{
                id: Date.now(),
                username: this.username.value,
                age: this.age.value
            }])
    }
}

export default connect(
    state => ({ count: state.count, person: state.person }),
    {
        addPerson: createAddPersonAc
    }
)(PersonUI);