import styled from "styled-components";


export const EmailContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem 0;
`;


export const EmailSender = styled.p`
    font-weight: 600;
    color: #141414;
    flex-grow: 1;
`;

export const EmailTitle = styled.p`
    font-weight: 400;
    color: #141414;
    flex-grow: 2;
`;

export const EmailTimeAgo = styled.p`
    font-weight: 300;
    color: #7e7e7e;
    flex-grow: 1;
`;

const Email = ()=>{

    return(
        <EmailContainer>
            <EmailSender>Email Sender</EmailSender>
            <EmailTitle>Mauris varius nisi non purus vestibulum interdum. Ut eget</EmailTitle>
            <EmailTimeAgo>1s ago</EmailTimeAgo>
        </EmailContainer>
    );

};

export default Email;