import React, {memo, useEffect, useState, useTransition} from 'react';

/**
 * useTransition 执行两次 观察输出
 * 初始化 执行一次
 * 在更新的时候执行两次 原有数据执行一次 在更新完成后新数据在执行一次
 * @Author pxx
 * @DATA 2024/3/13 14:57
 */

function Index() {

    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    console.log('Index() =', isPending)
    console.log('tab =', tab)
    //useTransition和useDeferredValue有点不一样
    //在第二次执行的时候触发useEffect
    useEffect(() => {
        console.log('useEffect =', isPending)
    }, [tab])

    function selectTab(nextTab) {
        //start包裹执行更新的操作
        startTransition(() => {
            setTab(nextTab);
        });
    }

    return (
        <>
            <TabButton
                isActive={tab === 'about'}
                onClick={() => selectTab('about')}
            >
                About
            </TabButton>
            <TabButton
                isActive={tab === 'posts'}
                onClick={() => selectTab('posts')}
            >
                Posts (slow)
            </TabButton>
            <TabButton
                isActive={tab === 'contact'}
                onClick={() => selectTab('contact')}
            >
                Contact
            </TabButton>
            <hr />
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
            {tab === 'contact' && <ContactTab />}
        </>
    );
}

function TabButton({ children, isActive, onClick }) {
    console.log('isActive =', children, isActive)
    if (isActive) {
        return <b>{children}</b>
    }
    return (
        <button onClick={() => {
            onClick();
        }}>
            {children}
        </button>
    )
}

function AboutTab() {
    return (
        <p>Welcome to my profile!</p>
    );
}

const PostsTab = memo(function PostsTab() {
    // 打印一次。真正变慢的地方在 SlowPost 内。
    console.log('[ARTIFICIALLY SLOW] Rendering 500 SlowPost ');

    let items = [];
    for (let i = 0; i < 500; i++) {
        items.push(<SlowPost key={i} index={i} />);
    }
    return (
        <ul className="items">
            {items}
        </ul>
    );
});

function SlowPost({ index }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 8) {
        // 每个 item 都等待 1 毫秒以模拟极慢的代码。
    }

    return (
        <li className="item">
            Post #{index + 1}
        </li>
    );
}

function ContactTab() {
    console.log('我测试自己有没有执行ContactTab');
    let [num, setNum] = useState(0)

    return (
        <>
            <p>
                You can find me online here:
            </p>
            <ul>
                <li>admin@mysite.com</li>
                <li>+123456789</li>
            </ul>
            <App num={num}/>
            <button onClick={() => setNum(++num)}>++++</button>
        </>
    );
}

// 我想测试在props传递不变的情况下, App函数会执行吗
function App(props) {
    console.log('我测试自己有没有执行App');
    const { num } = props
    return (
        <h1>{num}</h1>
    )
}


export default Index;