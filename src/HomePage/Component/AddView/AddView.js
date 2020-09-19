import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {dUserActions} from "../../../_actions";
import './addview.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserAlt, faEnvelope, faUsers} from '@fortawesome/free-solid-svg-icons'

function AddView() {
    const [dUser, setDUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        depName: '',
        userRole: ''
    });
    const [submitted, setSubmitted] = useState(false);
    //const adding = useSelector(state => state.add.adding);
    const dispatch = useDispatch();

    function handleChange(e) {
        const {name, value} = e.target;
        setDUser(dUser => ({...dUser, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
        if (dUser.firstName && dUser.lastName && dUser.email && dUser.depName && dUser.userRole) {
            dispatch(dUserActions.add(dUser));
            window.location.reload(false);
        }
    }

    return (
        <div className="addView-content">
            <div className="title">
                <h2>Create User</h2>
                <p>Add users into the SpringBoard platform</p>
            </div>
            <div className="form" onSubmit={handleSubmit}>
                <form>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faUserAlt}/>
                        <input type="text" placeholder="First Name" name="firstName" value={dUser.firstName} onChange={handleChange} className={'form-control' + (submitted && !dUser.firstName ? ' is-invalid' : '')}/>
                    </div>
                    <div className="form-group right">
                        <FontAwesomeIcon icon={faUserAlt}/>
                        <input type="text" placeholder="Last Name" name="lastName" value={dUser.lastName} onChange={handleChange} className={'form-control' + (submitted && !dUser.lastName ? ' is-invalid' : '')}/>
                    </div>
                    <div className="form-group">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <input type="email" placeholder="Email Address" name="email" value={dUser.email} onChange={handleChange} className={'form-control' + (submitted && !dUser.email ? ' is-invalid' : '')}/>
                    </div>
                    <div className="form-group right">
                        <FontAwesomeIcon icon={faUsers}/>
                        <input type="text" placeholder="Department Name" name="depName" value={dUser.depName} onChange={handleChange} className={'form-control' + (submitted && !dUser.depName ? ' is-invalid' : '')}/>
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="User Role" name="userRole" value={dUser.userRole} onChange={handleChange} className={'form-control' + (submitted && !dUser.userRole ? ' is-invalid' : '')}/>
                    </div>
                    <div className="form-group button-view">
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {AddView}
