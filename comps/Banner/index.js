import React from 'react';
import styled, {css} from 'styled-components';

const ABanner = styled.div`
    background: rgba(255, 255, 255, 0.88);
    width: 478px;
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 35px;
`

const BannerHeader = styled.h1`
    font-size: 32px;
    line-height: 15px;
`
const BannerSubHeader = styled.h2`
    font-size: 18px;
    color: #3D5AF1;
`

const Banner = ({}) => {
    return <ABanner>
        <BannerHeader>Hack your way into learning</BannerHeader>
        <BannerSubHeader>Start your free account today!</BannerSubHeader>
    </ABanner>
}

Banner.defaultProps = {

}

export default Banner;