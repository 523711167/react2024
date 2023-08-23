import React, {Component} from 'react';
import qs from 'querystringify'

const data = [
    {id: '1', content: '你好,拼叨叨'},
    {id: '2', content: '你好,拼夕夕'},
    {id: '3', content: '你好,拼赖赖'}
]
class Detail extends Component {

    render() {
        let search = this.props.location.search.slice(1);
        let id = qs.parse(search).id;
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