import React from "react";
import { Link, Outlet, useNavigate, useOutlet } from "react-router-dom";

export default function New() {

    let navigate = useNavigate();
    console.log('useOutlet() =', useOutlet())
    let show = id => {
        return () => {
            navigate('detail', {
                replace: false,
                state: {
                    id,
                }
            })
        }
    }

    return (
        <div>
            <ul>
                <li>
                    <Link to={`detail`} state={{ id: '1' }}>啦啦啦</Link>
                    <button onClick={show('1')}>查看详情</button>
                </li>
                <li>
                    <Link to={`detail`} state={{ id: '2' }}>啦啦啦</Link>
                    <button onClick={show('2')}>查看详情</button>
                </li>
                <li>
                    <Link to={`detail`} state={{ id: '3' }}>噜噜噜</Link>
                    <button onClick={show('3')}>查看详情</button>
                </li>
            </ul>
            <div>
                <Outlet/>
            </div>
        </div>
    )


}