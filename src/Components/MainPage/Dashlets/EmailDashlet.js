import styled from "styled-components";
import Email from "../ContentTypes/Email";
import Dashlet from '../Dashlet';



const EmailDashlet =()=>{
    return(
        <Dashlet>
            <Email></Email>
            <Email></Email>
            <Email></Email>
        </Dashlet>
    )
};  

export default EmailDashlet;