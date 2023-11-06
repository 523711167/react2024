import React from 'react';
import {createGlobalStyle} from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 20:36
 */

let GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  
  .debug-r {
    outline: 2px solid #fff;
  }
`;
function Index() {
    return (
        <div>
            <GlobalCss/>
            <p className={'debug-r'}>Hello World</p>
        </div>
    )
}

export default Index;