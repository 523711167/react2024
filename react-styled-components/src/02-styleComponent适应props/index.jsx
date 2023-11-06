import React from 'react';
import styled from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 11:22
 */function Index() {

    const Button = styled.button`
      background: ${props => props.$primary ? "#BF4F74" : "white"};
      color: ${props => props.$primary ? "white" : "#BF4F74"};
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #BF4F74;
      border-radius: 3px;
    `;


    return (
        <div>
            <Button $primary={true} children={'我是true'}/>
            <Button $primary={false} children={'我是false'}/>
        </div>
    )
}

export default Index;