import React, {Component} from 'react';

const data = [
    {id: '1', content: '你好,拼叨叨'},
    {id: '2', content: '你好,拼夕夕'},
    {id: '3', content: '你好,拼赖赖'}
]
class Detail extends Component {

    render() {
        console.log(this.props);
        let state = this.props.location.state;
        let id = state.id;
        let detail = data.find((item, index) => item.id === id);
        return (
            <div>
                <ul>
                    <li>{detail.id}</li>
                    <li>{detail.content}</li>
                </ul>
            </div>
        );
    }
}

export default Detail;