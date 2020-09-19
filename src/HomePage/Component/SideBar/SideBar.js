import React,{useState} from 'react';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt,faFileAlt,faHome} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';



function SideBar({getBtnId}){
    const [btnID, setClassId] =useState(0);
    function setBtnID(e){
        getBtnId(e);
        setClassId(Number(e.target.id));
    }
    return(
        <div className="side-bar">
            <ul>
                <li onClick={setBtnID} className={0 == btnID ? 'active': ''} id='0'><FontAwesomeIcon icon={faHome}/>Home</li>
                <li onClick={setBtnID} className={1 == btnID ? 'active': ''} id='1'><FontAwesomeIcon icon={faFileAlt}/>Create User</li>
                <li><Link to="/login"><FontAwesomeIcon icon={faSignOutAlt}/>Logout</Link></li>
            </ul>
        </div>
    )
}

export { SideBar }