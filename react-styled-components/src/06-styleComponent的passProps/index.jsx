import React from 'react';
import styled from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 15:59
 */
const Input = styled.input`
      padding: 0.5em;
      margin: 0.5em;
      color: ${ props => {
    console.log('Input =', props)
    return props.$inputColor || "#BF4F74"
}};
      background: papayawhip;
      border: none;
      border-radius: 3px;
    `;

let StyledInput = styled(Input)`
  color: ${ props => {
    console.log('StyledInput =', props)
    return props.$inputColor || "#BF4F74"
  }};
  background: #ad7d31;
`;

function Index() {

    return (
        <div>
            <Input defaultValue="@probablyup" type="text"/>
            <Input defaultValue="@geelen" type="text"
                   $inputColor="rebeccapurple"/>
            <StyledInput $inputColor="rebeccapurple" defaultValue="@geelen"/>
        </div>
    )
}

export default Index;