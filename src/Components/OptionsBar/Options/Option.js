import * as React from "react";

import './Option.css';

const Option = (props) =>{
   
    return(
        <div onClick={props.onClick} className="option-element">
            <li className="option-list">
                <img src={props.icon} className="option-icon" />
                <a href={props.href} className="option-link">
                    {props.optionName}
                </a>
            </li>

        </div>
    );
};

export default Option;