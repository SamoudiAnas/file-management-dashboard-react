import styled from "styled-components";
import SideBar from "../SideBar/SideBar/SideBar";
import SearchBar from "../Overview/TopBar/SearchBar/SearchBar";
import Email from "./ContentTypes/Email";
import Dashlet from "./Dashlet";

export const FlexContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  position: absolute;
  left: 250px;
  width: calc(100%-250px);
`;
export const SectionName = styled.h3`
  text-align: start;
  margin: 3rem 3rem 1.5rem 3rem;
`;
export const DashletContainer = styled.div`
  padding:1.5rem 2rem 1.5rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  
`;

const MainPage = () => {
  return (
    <FlexContainer>
      <SideBar />
      <Container>
        <SearchBar />
        <SectionName>Your dashboard</SectionName>
        <DashletContainer>
          <Dashlet></Dashlet>
          <Dashlet></Dashlet>
        </DashletContainer>
        <DashletContainer>
          <Dashlet></Dashlet>
          <Dashlet></Dashlet>
        </DashletContainer>
      </Container>
    </FlexContainer>
  );
};

export default MainPage;
