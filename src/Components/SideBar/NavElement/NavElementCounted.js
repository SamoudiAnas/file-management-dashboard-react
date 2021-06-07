import * as React from "react";

import './NavElement.css';

const NavElementCounted = (props) =>{
    return(
        <div className="nav-element">
            <li className="nav-list">
                <img src={props.icon} className="nav-icon" />
                <a href={props.href} className="nav-link">
                    {props.navName}
                </a>
                <span className="count">0</span>
            </li>

        </div>
    );
};

export default NavElementCounted;