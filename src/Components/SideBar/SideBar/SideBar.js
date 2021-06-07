import * as React from "react";
import NavElement from "../NavElement/NavElement";
import NavElementCounted from "../NavElement/NavElementCounted";
import AnasLogo from '../../Icons/AnasLogo.svg'
import Folders from '../../Icons/folders.svg'
import logout from '../../Icons/logout.svg'
import Shared from '../../Icons/share.svg'
import Important from '../../Icons/important.svg'
import Profile from "../../Overview/TopBar/Profile/Profile";
import Messages from '../../Icons/email.svg';
import Notifications from '../../Icons/bell.svg';
import Tasks from '../../Icons/tasks.svg';
import History from '../../Icons/history.svg'
import styled from "styled-components";
import './SideBar.css';

export const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
`;



const SideBar = (props) =>{
    return(
        <div className="sidebar">
            <div className="logo">
                <img src={AnasLogo} className="logo-icon"/>   
                <h3 className="logo-name">Anas Sam</h3>
            </div>

            <Profile />
            <div className="empty-div"></div>
            
            <NavElementCounted icon={Messages} navName="Messages" href="#" />
            <NavElementCounted icon={Notifications} navName="Notifications" href="#" />
            <div className="empty-div"></div>
            
            <NavElement icon={Folders} navName="All Files" href="#" />
            <NavElement icon={Shared} navName="Shared Files" href="#" />
            <NavElement icon={Important} navName="Important Files" href="#" />
            <div className="empty-div"></div>
            <NavElement icon={Tasks} navName="Tasks" href="#" />
            <NavElement icon={History} navName="Tasks History" href="#" />
            <div className="empty-div"></div>
            <NavElement icon={logout} navName="Sign Out" href="#" />

            <h6 className="copyright">© Anas Sam, Inc</h6>
        </div>
    );
};

export default SideBar;