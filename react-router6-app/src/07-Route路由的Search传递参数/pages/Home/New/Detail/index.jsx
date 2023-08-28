
import React, {Component} from 'react';
import {useParams, useSearchParams} from "react-router-dom";

const data = [
    {id: '1', content: '你好,拼叨叨'},
    {id: '2', content: '你好,拼夕夕'},
    {id: '3', content: '你好,拼赖赖'}
]

function Detail() {
    const [search, setSearch]  = useSearchParams();
    let detail = data.find((item, index) => item.id === search.get('id'));

    return (
        <div>
            <ul>
                <li><button onClick={() => setSearch('id=1')}>点击更新收到参数</button></li>
                <li>{detail.id}</li>
                <li>{detail.content}</li>
            </ul>
        </div>
    );
}

export default Detail;