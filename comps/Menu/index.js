import React from 'react';
import styled, {css} from 'styled-components';
import Courses from '../Courses';
import Logo from '../Logo';
import Profile from '../Profile';


const TopBar = styled.div`
position: absolute;
width: 1451px;
height: 78px;
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.13);
display:flex;
align-item:center;
justify-content:center;
flex-direction:row;
`

// const Logo = styled.div`
// position: absolute;
// width: 130.02px;
// height: 28px;
// left: 29px;
// top: 24px;
// `

const Search = styled.div`
position: absolute;
left: 83.89%;
right: 14.65%;
top: 35.9%;
bottom: 37.18%;
background: url(/Search.png);
background-repeat: no-repeat;
`

const Bell = styled.div`
position: absolute;
left: 88.47%;
right: 10.21%;
top: 35.9%;
bottom: 39.74%;
background: url(/Bell.png);
background-repeat: no-repeat;
`

const Menu = ({}) => {
    return <TopBar>
      
                <Logo />
                <Courses />
                <Search />
                <Bell />
                <Profile />
             
           </TopBar>
           
}

Menu.defaultProps = {

}

export default Menu;