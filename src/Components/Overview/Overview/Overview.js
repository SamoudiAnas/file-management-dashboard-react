import * as React from "react";
import Folder from "../Folders/Folder";
import SearchBar from "../TopBar/SearchBar/SearchBar";
import Profile from "../TopBar/Profile/Profile";
import styled from "styled-components";
import "./Overview.css";



const Overview = () => {
  return (
    <div className="overview">
      <SearchBar />
      <h3 className="section-name">All Files</h3>

      
      <div className="templates">
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
        <Folder />
      </div>
    </div>
  );
};

export default Overview;
