import React from 'react';
import styled, {css} from 'styled-components';
import Banner from '../Banner'

const HeroContainer = styled.div`
    width: 50%;
    height: 200vh;
    background: url(/Hero1.png);
    background-repeat: no-repeat;
    position: absolute;
`

const BannerContainer = styled.div`
    position: relative;
    display: flex;
    left: 15%;
    top: 60%;
`

const Hero = () => {
    return <HeroContainer>
        <BannerContainer>
            <Banner/>
        </BannerContainer>
    </HeroContainer>
}

export default Hero;