import React from 'react';
import styled, {css} from 'styled-components';

const Input = styled.input.attrs({
    type: 'text'
})`
    font-size: 14px;
    color: #000;
    width: 384px;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: #F2F4FB;
    padding-left: 10px;
    border-radius: 5px;
    border: none;
    margin-top: 5px;
    margin-bottom: 15px;
`

const FormInput = ({text}) => {
    return <div> {text}
    <Input></Input>
    </div>
}

FormInput.defaultProps = {
    text: "LOGIN",
}

export default FormInput;