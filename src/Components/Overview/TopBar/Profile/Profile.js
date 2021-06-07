import styled from "styled-components";
import Anas from '../../../Images/anas.jpeg';


export const ProfileContainer = styled.div`
    display: flex;  
    align-items: center;
    margin:  1rem 2rem;
`;

export const ProfilePic = styled.img`
    width: 40px;
    height:40px;
    border-radius :50%;
    box-shadow: 0 0 5px rgba(0,0,0,0.1);
    margin-right: 15px;
`;

export const ProfileName = styled.h4`
    color: #fff;
    font-weight: 400;
`;



const Profile =()=>{
    return(
        <ProfileContainer>
            <ProfilePic src={Anas}/>
            <ProfileName>Anas Sam</ProfileName>

        </ProfileContainer>
    );
};

export default Profile;