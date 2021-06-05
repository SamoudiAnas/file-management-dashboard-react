import * as React from "react";

import './NavElement.css';

const NavElement = (props) =>{
    return(
        <div className="nav-element">
            <li className="nav-list">
                <img src={props.icon} className="nav-icon" />
                <a href={props.href} className="nav-link">
                    {props.navName}
                </a>
            </li>

        </div>
    );
};

export default NavElement;