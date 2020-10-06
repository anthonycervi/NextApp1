import React from 'react';
import styled, {css} from 'styled-components';

import Button from '../Button'
import Divider from '../Divider';
import Input from '../Input';

const FormContainer = styled.div`
    width: 390px;`

const FormHeader = styled.h1`
    font-size: 30px;
    margin-bottom: 50px;
`

const ForgotPassword = styled.p`
    font-size: 14px;
    color: #4285F4;
    text-align: right;`

const WelcomeForm = ({}) => {
    return <FormContainer>
        <FormHeader>Welcome Back!</FormHeader>
        <Button text="Login with Google"/>

        <Divider/>

        <Input text="EMAIL"></Input>
        <Input text="PASSWORD"></Input>

        <ForgotPassword>Forgot password?</ForgotPassword>

        <Button google="#4285F4"/>
        <Button color="#D79B9B" text="Signup" google="#D79B9B"/>

    </FormContainer>
}

export default WelcomeForm; 