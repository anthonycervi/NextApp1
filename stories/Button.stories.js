import React from 'react';

import Button from '../comps/Button';

export default {
  title: "Button",
  component: Button
};

export const LoginButton = () => 
  <Button
    google="#4285F4"/>;

export const SignUpButton = () => 
  <Button
    color="#D79B9B"
    text="Signup"
    google="#D79B9B"/>;

  export const GoogleButton = () => 
  <Button
    color="#4285F4"
    text="Login with Google"/>;