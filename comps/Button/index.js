import React from 'react';
import styled, {css} from 'styled-components';

const LoginButton = styled.div`
    font-size: 16px;
    color: #FFF;
    width: 384px;
    height: 50px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4285F4;
    margin-bottom: 15px;
    border-radius: 5px;
`

const GoogleButton = styled.div`
    width: 45px;
    height: 45px;
    margin-left: 3px;
    position: absolute;
    left: 15px;
    background-color: ${props=>props.google ? props.google : "#FFF"};
`

const Button = ({color, google, text}) => {
    return <LoginButton 
    style ={
        {backgroundColor: color}}>
            <GoogleButton
            style = {
                {backgroundColor: google}}>
                </GoogleButton>
            {text}
    </LoginButton>
}

Button.defaultProps = {
    text: "Login",
    color: "#4285F4" //#D79B9B
}

export default Button;