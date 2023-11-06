import React from 'react';
import styled from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 18:55
 */
// .attrs 是从最内层的 styled-component 应用到最外层的 styled-component 的。
const Thing = styled.div.attrs((/* props */) => (
        {
            //attrs可以设置html标签的属性
            tabIndex: 0,
            height: '100px'
        })
    )`
  color: blue;
  // <Thing> when hovered
  &:hover {
    color: red;
  }
  // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  //p ~ ul 在同级下，选中p元素后的ul元素
  & ~ & {
    background: tomato; 
  }
  // <Thing> next to <Thing>
  //p + ul 在同级下，选中p元素后的第一个ul元素
  & + & {
    background: lime; 
  }
  // <Thing> tagged with an additional CSS class ".something"
  &.something {
    background: orange; 
  }
  // <Thing> inside another element labeled ".something-else"
  .something-else & {
    border: 1px solid; 
  }
`

function Index() {
    return (
        <div>
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>
        </div>
    )
}

export default Index;