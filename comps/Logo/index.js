import React from 'react';
import styled, {css} from 'styled-components';

const LogoContainer = styled.div`
position: absolute;
width: 130.02px;
height: 28px;
aligh-items:center;
justify-content:center
display:flex;
flex_direction:row;
`

const LogoImg = styled.div`
background: url(/LogoImg.png);
width: 50%;
height: 100vh;
background-repeat: no-repeat;
position: absolute;
`

const LogoTitle = styled.div`
position: absolute;
left: 31.03%;
right: 0%;
top: 7.14%;
bottom: 10.71%;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
letter-spacing: 0.1em;

color: #3D5AF1;
`

const Logo = ({}) => {
    return <LogoContainer>
                <LogoImg />
                <LogoTitle>Logo</LogoTitle>
            </LogoContainer>
    
    
      
 
}

Logo.defaultProps = {

}

export default Logo;