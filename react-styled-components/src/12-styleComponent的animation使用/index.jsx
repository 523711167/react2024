import React from 'react';
import styled, {keyframes} from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 21:00
 */

const Wrapper = styled.div`
  // 这里的 &:hover 是无效的，因为它引用的是 Wrapper 组件本身，而不是子元素
  &:hover {
    background-color: red;
  }
`;

const Child = styled.div`
  color: blue;
`;
// const Wrapper = styled.div`
//   // 这里使用 &&:hover 可以正确地选择子元素并应用 hover 样式
//   &&:hover {
//     background-color: red;
//   }
// `;
//
// const Child = styled.div`
//   color: blue;
// `;
function Index() {
    return (
        <>
            <Wrapper>
                <Child>Some text</Child>
            </Wrapper>
            <div></div>
        </>
    )
}

export default Index;