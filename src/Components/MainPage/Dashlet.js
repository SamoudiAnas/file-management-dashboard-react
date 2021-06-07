import styled from "styled-components";
import Email from "./ContentTypes/Email";

export const DashletName = styled.div`
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    background-color: #2191FB;
    padding:1rem 1rem;
`;

export const DashletContainer = styled.div`
    border: 1px solid #2191FB;
    padding: 1em 1em 1.5rem 1em;
    background-color: #fff;

`;
export const DashletContent = styled.div`
    max-lines: 3;

`;

export const Container = styled.div`
    margin: 0 1rem;
   
`;
const Dashlet =()=>{
    return(<Container>
        <DashletName>Test</DashletName>
        <DashletContainer>
            <DashletContent>
            <Email></Email>
            <Email></Email>
            <Email></Email>
            <Email></Email>
            </DashletContent>
        </DashletContainer>
        </Container>
    );
};

export default Dashlet;