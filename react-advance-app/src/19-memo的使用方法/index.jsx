import React, {memo, useState} from 'react';

/**
 * memo 允许你的组件在 props 没有改变的情况下跳过函数执行。
 * 我理解为函数执行和重新渲染不一样
 * 重新渲染 在diff算法下不会更新dom
 * 函数执行 父组件setState，都会触发下面所有组件重新执行函数,可能不触发重新渲染
 * @Author pxx
 * @DATA 2024/3/19 18:51
 */

function Index() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    return (
        <>
            <label>
                Name{': '}
                <input value={name} onChange={e => setName(e.target.value)} />
            </label>
            <label>
                Address{': '}
                <input value={address} onChange={e => setAddress(e.target.value)} />
            </label>
            <Greeting name={name} />
            <MemoGreeting name={name} />
        </>
    );
}

const MemoGreeting = memo(function Greeting({ name }) {
    console.log("MemoGreeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}! {new Date().getTime()}</h3>;
});

function Greeting({ name }) {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    return <h3>Hello{name && ', '}{name}! {new Date().getTime()}</h3>;
}

export default Index;