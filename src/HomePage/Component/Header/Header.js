import React from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch,faBell,faUser} from '@fortawesome/free-solid-svg-icons'

function Header(props) {
    return (
        <div className="header">
            <div className="search-bar">
                <input placeholder="Search"/>
                <button> <FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="left-side">
                <div className="notification">
                    <FontAwesomeIcon icon={faBell}/>
                </div>
                <div className="profile"><span className="name">{props.username.firstName}</span><FontAwesomeIcon icon={faUser}/></div>
            </div>
        </div>
    )
}

export {Header}