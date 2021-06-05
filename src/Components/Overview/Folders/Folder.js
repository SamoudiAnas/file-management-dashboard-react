import * as React from "react";
import illustration from '../../Images/illustration.jpg'
import './Folder.css';

const Folder = (props) =>{
    return(
        <div className="folder-box">
           <img className="folder-img" src={illustration} />
           <h3 className="folder-name">Templates for designs</h3>

           <h5 className="folder-date">04 Jun 2021</h5>
           <img className="folder-option"/>
        </div>
    );
};

export default Folder;