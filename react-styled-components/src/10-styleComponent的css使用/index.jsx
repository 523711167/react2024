import React from 'react';
import styled, {css} from "styled-components";

let styledCss = css`
  height: 200px;
  width: 200px;
`;

const StyledDiv = styled.div`
  ${styledCss};
  background-color: #fff;
  color: red;
  
  & + & {
    background-color: pink;
  }
`

function Index() {
    return (
        <div>
            <StyledDiv></StyledDiv>
            <StyledDiv></StyledDiv>
        </div>
    )
}

export default Index;