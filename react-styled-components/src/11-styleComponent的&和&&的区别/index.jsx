import React from 'react';
import styled, {keyframes} from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 21:00
 */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

function Index() {
    return (
        <div>
            <Rotate>&lt; 💅🏾 &gt;</Rotate>
        </div>
    )
}

export default Index;