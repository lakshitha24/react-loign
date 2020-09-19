import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Footer} from './Component/Footer';
import {Header} from './Component/Header';
import {SideBar} from './Component/SideBar';
import {ListView} from './Component/ListView';
import {AddView} from './Component/AddView';
import './homepage.scss'
import {userActions} from '../_actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    const [panelIndex, setPanelIndex] = useState(0);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function handleDeleteUser(id) {
        dispatch(userActions.delete(id));
    }

    function getBtnId(e) {
        setPanelIndex(Number(e.target.id))
    }

    const panel = [<ListView/>, <AddView/>];
    return (
        <div className="home-content">
            <Header username={user}/>
            <SideBar getBtnId={getBtnId}/>
            <div className="content-view">
                {panel[panelIndex]}
            </div>
            <Footer/>
            <h1>Hi {user.firstName}!</h1>
            <p>You're logged in with React Hooks!!</p>
            <h3>All registered users:</h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <span className="text-danger">ERROR: {users.error}</span>}
            {users.items &&
            <ul>
                {users.items.map((user, index) =>
                    <li key={user.id}>
                        {user.firstName + ' ' + user.lastName}
                        {
                            user.deleting ? <em> - Deleting...</em>
                                : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                : <span> - <a onClick={() => handleDeleteUser(user.id)}
                                              className="text-primary">Delete</a></span>
                        }
                    </li>
                )}
            </ul>
            }
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export {HomePage}