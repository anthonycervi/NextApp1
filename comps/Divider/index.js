import React from 'react';
import styled, {css} from 'styled-components';

const DividerStyle = styled.div`
    & {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }

    &:before, &:after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #C6C6C6;
    }
    
    &:before {
        margin-right: 1em;
    }

    &:after {
        margin-left: 1em;
    }
`

const Divider = ({}) => {
    return <DividerStyle>or</DividerStyle>
}

Divider.defaultProps = {
    
}

export default Divider;