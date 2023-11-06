import React from 'react';
import styled from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 11:36
 */function Index() {

    const Button = styled.button`
      color: #BF4F74;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid #BF4F74;
      border-radius: 3px;
    `;

    const TomatoButton = styled(Button)`
      color: tomato;
      border-color: tomato;
    `;

    return (
        <div>
            <Button>Normal Button</Button>
            <TomatoButton>Tomato Button</TomatoButton>
        </div>
    )
}

export default Index;