import styled from "styled-components";
import Email from "../ContentTypes/Email";

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
export const ViewMore = styled.h4`
    color: #2191FB;
    text-decoration: underline;
    font-weight: 400;
    text-align: end;
    padding-top:5px;
    padding-right: 2rem;
    &:hover{
        cursor: pointer;
    }
`;
const Dashlet =()=>{
    const items =[
        {
            id:'key1',
            name:'Anas Sam',
            title:'Mauris varius nisi non purus vestibulum interdum. Ut eget',
            timeAgo:'1s ago'
        },
        {
            id:'key1',
            name:'Anas Sam',
            title:'Mauris varius nisi non purus vestibulum interdum. Ut eget',
            timeAgo:'1s ago'
        },
        {
            id:'key1',
            name:'Anas Sam',
            title:'Mauris varius nisi non purus vestibulum interdum. Ut eget',
            timeAgo:'1s ago'
        }
       
    ];

    return(<Container>
        <DashletName>Test</DashletName>
        <DashletContainer>
            <DashletContent>
            {
                items.map((item)=>(
                    <Email content={item}/>
                ))
            }
            <ViewMore>View More {'>'}</ViewMore>

            </DashletContent>
        </DashletContainer>
        </Container>
    );
};

export default Dashlet;