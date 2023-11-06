import React from 'react';
import styled from "styled-components";

/**
 *
 * @Author pxx
 * @DATA 2023/11/5 15:46
 */function Index() {

    const StyledLink = styled(Link)`
      color: #BF4F74;
      font-weight: bold;
    `;

    return (
        <div>
            <Link>Unstyled, boring Link</Link>
            <br />
            <StyledLink>Styled, exciting Link</StyledLink>
        </div>
    )
}

const Link = ({className, children}) => (
    <a className={className}>
        {children}
    </a>
);

export default Index;