import * as React from "react";
import NavElement from "../NavElement/NavElement";
import AnasLogo from '../../Icons/AnasLogo.svg'
import Folders from '../../Icons/folders.svg'
import logout from '../../Icons/logout.svg'
import Shared from '../../Icons/share.svg'
import Important from '../../Icons/important.svg'
import './SideBar.css';

const SideBar = (props) =>{
    return(
        <div className="sidebar">
            <div className="logo">
                <img src={AnasLogo} className="logo-icon"/>   
                <h3 className="logo-name">Anas Sam</h3>
            </div>
            <NavElement icon={Folders} navName="All Files" href="#" />
            <NavElement icon={Shared} navName="Shared Files" href="#" />
            <NavElement icon={Important} navName="Important Files" href="#" />
            <div className="sign-out"></div>
            <NavElement icon={logout} navName="Sign Out" href="#" />

            <h6 className="copyright">© Anas Sam, Inc</h6>
        </div>
    );
};

export default SideBar;