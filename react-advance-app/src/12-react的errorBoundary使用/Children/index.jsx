import React, {Component} from 'react';

const students = [
    { id: 1, username: 'pxx'},
    { id: 2, username: 'pdd'},
    { id: 3, username: 'pll'},
    { id: 4 }
];
class Index extends Component {

    render() {
        return (
            <div>
                我是子组件
                <ul>
                    {
                        students.map((val, index) => {
                            return (
                                <li key={val.id}>{val.username.toLocaleLowerCase()}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Index;


