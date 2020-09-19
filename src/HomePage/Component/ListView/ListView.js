import React, {useEffect, useState} from 'react';
import logo from '../../../images/1234.png';
import {useDispatch, useSelector} from 'react-redux';
import './listview.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {dUserActions} from "../../../_actions";

function ListView() {
    const dUsers = useSelector(state => state.dUser);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(dUserActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(dUserActions.delete(id));
        dispatch(dUserActions.getAll());
    }

    function divider(item) {
        let depNames = []
        item.map(user => {
            depNames.push(user.depName)
        })
        let unique = [...new Set(depNames)];
        return unique;
    }

    return (
        <div className="listview-container">
            <div className="department-view">
                {dUsers.loading && <em>Loading users...</em>}
                {dUsers.error && <span className="text-danger">ERROR: {dUsers.error}</span>}
                {dUsers.items &&
                <ul>
                    {divider(dUsers.items).map(x =>

                        <li id={x}>
                            <div className="department-name">{x}</div>
                            <div className="list">
                            {dUsers.items.filter(y => y.depName == x).map(user =>
                                <div className="department-user-list" id={user.id}>
                                    <div className="user">
                                        <div className="details">
                                            <div className="name">
                                                <span className="first-name">{user.firstName}</span>
                                                <span className="lastname">{user.lastName}</span>
                                            </div>
                                            <div className="action" onClick={() => handleDeleteUser(user.id)}><FontAwesomeIcon icon={faTrashAlt}/></div>
                                        </div>
                                        <div className="image-view"><img src={logo}/></div>
                                    </div>
                                </div>
                            )}
                            </div>
                        </li>
                    )}

                </ul>
                }
            </div>
        </div>
    )
}

export {ListView}
