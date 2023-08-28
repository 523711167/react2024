
import React from 'react';
import { useLocation } from 'react-router-dom'

const data = [
    {id: '1', content: '你好,拼叨叨'},
    {id: '2', content: '你好,拼夕夕'},
    {id: '3', content: '你好,拼赖赖'}
]

function Detail() {
    const { state }  = useLocation();
    let detail = data.find((item, index) => item.id === state.id);
    return (
        <div>
            <ul>
                <li>{detail.id}</li>
                <li>{detail.content}</li>
            </ul>
        </div>
    );
}

export default Detail;