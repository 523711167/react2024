import React from 'react';
import styled from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 11:57
 */function Index() {

    const Button = styled.button`
      display: inline-block;
      color: #BF4F74;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #BF4F74;
      border-radius: 3px;
      display: block;
    `;

   const TranslateNewButton = (props) => (
        <h1 {...props}>TranslateNewButton</h1>
   )

    return (
        <div>
            <Button>Link with Button styles</Button>
            {/* 被解析为a标签 */}
            <Button as="a" href="#">Link with Button styles</Button>
            <Button as={TranslateNewButton} href="#">Link with Button styles</Button>
        </div>
    )
}

export default Index;