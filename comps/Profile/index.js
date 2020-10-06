import React from 'react';
import styled, {css} from 'styled-components';

const MyProfile = styled.div`
    position: absolute;
    width: 41.31px;
    height: 41px;
`

const ProfileInitials = styled.div`
position: absolute;
left: 24.21%;
right: 20.12%;
top: 26.83%;
bottom: 26.83%;

font-family: Roboto;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
/* identical to box height */


color: #FFFFFF;
`

const ProfileCircle = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;
border-radius:50%;

background: #FFA555;
`


const Profile = ({}) => {
    return  <MyProfile>
                <ProfileCircle />
                <ProfileInitials>JK</ProfileInitials>
            </MyProfile>
      
    
}

Profile.defaultProps = {

}

export default Profile;