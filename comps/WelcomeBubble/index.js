import React from 'react';
import styled, {css} from 'styled-components';


const WelcomeBubbleMain = styled.div`
position: absolute;
width: 529px;
height: 264.83px;

filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const WelcomeBubbleRectangle = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 4.09%;
background: #A1A6C5;
border-radius: 5px;

width:529px;
Height:254px;
Radius:5px;
`

const WelcomeBubbleTriangle = styled.div`
position: absolute;
left: 91.81%;
right: 1.76%;
top: 100%;
bottom: -5.9%;

background: #A1A6C5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 3px;
transform: rotate(180deg);

Width:34.03px
Height:15.62px
Top:264.83px
Left:485.66px
Radius:3px
`
const WelcomeBubbleContent = styled.div`
    position: absolute;
    width: 341px;
    height: 200px;
    left: 94px;
    top: 20px;
    
`

const WelcomeBubbleHand = styled.div`
    position: absolute;
    left: 42.72%;
    right: 42.53%;
    top: 7.55%;
    bottom: 64.13%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 55px;
    line-height: 137%;
    /* or 75px */

    text-align: center;

    color: #000000;

    background: url(/Hand.png);
    background-repeat: no-repeat;
`

const WelcomeBubbleText1 = styled.h1`
    position: absolute;
    left: 17.77%;
    right: 17.77%;
    top: 37.76%;
    bottom: 49.78%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 33px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
`

const WelcomeBubbleText2 = styled.h2`
    position: absolute;
    left: 26.84%;
    right: 21.36%;
    top: 52.11%;
    bottom: 39.96%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-align: center;

    color: #FFFFFF;
`

const WelcomeBubblePageIndicator = styled.div`
    position: absolute;
    left: 47.45%;
    right: 47.26%;
    top: 75.14%;
    bottom: 16.93%;

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    /* identical to box height */

    text-align: center;

    /* Gray 6 */

    color: #F2F2F2;
`

const WelcomeBubbleClose = styled.div`
    position: absolute;
    left: 93.01%;
    right: 4.84%;
    top: 7.55%;
    bottom: 88.15%;

    background: #FFFFFF;

    background: url(/Close.png);
    background-repeat: no-repeat;
`

const WelcomeBubbleButton = styled.div`
    position: absolute;
    width: 130px;
    height: 40px;
    radius:5px;
    left: 373px;
    top: 190px;
    background-color:#495678;
    justify-content:center;
    align-items:center;
    display:flex;
    color:#FFFFFF;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const WelcomeBubble = ({}) => {
    return <WelcomeBubbleMain>
    
                <WelcomeBubbleRectangle>

                    <WelcomeBubbleContent>
                    <WelcomeBubbleHand />
                    <WelcomeBubbleText1>Welcome to My App!</WelcomeBubbleText1>
                    <WelcomeBubbleText2>We're excited to help you</WelcomeBubbleText2>
                    <WelcomeBubblePageIndicator>1/4</WelcomeBubblePageIndicator>
                    </WelcomeBubbleContent>

                    <WelcomeBubbleClose />

                    <WelcomeBubbleButton>Next</WelcomeBubbleButton>

                    <WelcomeBubbleTriangle />
                </WelcomeBubbleRectangle>

            </WelcomeBubbleMain>
}

WelcomeBubble.defaultProps = {

}

export default WelcomeBubble;