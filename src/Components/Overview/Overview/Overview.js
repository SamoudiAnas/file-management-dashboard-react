import * as React from "react";
import Folder from "../Folders/Folder";
import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview">
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
