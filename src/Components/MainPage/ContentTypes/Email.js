import styled from "styled-components";


export const EmailContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    align-items: center;
    margin: 1rem 0;
`;


export const EmailSender = styled.p`
    overflow: hidden;
   
   
    text-overflow: ellipsis;
    font-weight: 600;
    color: #141414;
    flex-grow: 1;
`;

export const EmailTitle = styled.p`
    font-weight: 400;
    color: #141414;
    flex-grow: 2;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 1em;
    text-overflow: ellipsis;
`;

export const EmailTimeAgo = styled.p`
    font-weight: 300;
    color: #7e7e7e;
    flex-grow: 1;
    padding-left: 1em;
`;

const Email = (props)=>{

    return(
        <EmailContainer>
            <EmailSender>{props.content.name}</EmailSender>
            <EmailTitle>{props.content.title}</EmailTitle>
            <EmailTimeAgo>{props.content.timeAgo}</EmailTimeAgo>
        </EmailContainer>
    );

};

export default Email;