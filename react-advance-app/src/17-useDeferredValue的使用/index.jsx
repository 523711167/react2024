import React, {memo, useDeferredValue, useEffect, useState} from 'react';

/**
 * 初始化执行 执行一次，deferredText = text
 * 更新执行   执行两次，旧值执行一次，新值执行一次
 * @Author pxx
 * @DATA 2024/3/12 23:06
 */

function Index() {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);
    //会执行两次 一次新值一次旧值
    console.log('deferredText =', deferredText)
    useEffect(() => {
        //执行一次，并且是在第一次执行的
        console.log('text =', text)
    }, [text])
    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <SlowList text={deferredText} />
        </>
    );
}

const SlowList = memo(function SlowList({ text }) {
    // 仅打印一次。实际的减速是在 SlowItem 组件内部。

    let items = [];
    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }
    return (
        <ul className="items">
            {items}
        </ul>
    );
});

function SlowItem({ text }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 10) {
        // 每个 item 暂停 1ms，模拟极其缓慢的代码
    }

    return (
        <li className="item">
            Text: {text}
        </li>
    )
}

export default Index;

