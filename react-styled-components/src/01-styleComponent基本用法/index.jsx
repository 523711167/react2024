import React from 'react';
import styled from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 10:57
 */function Index() {

    let Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: #e3dfdf;
    `;

    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    return (
        <div>
            <Wrapper>
                <Title>
                    Hello World
                </Title>
            </Wrapper>
        </div>
    )
}

export default Index;