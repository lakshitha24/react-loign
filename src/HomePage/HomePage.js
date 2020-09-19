import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Footer} from './Component/Footer';
import {Header} from './Component/Header';
import {SideBar} from './Component/SideBar';
import {ListView} from './Component/ListView';
import {AddView} from './Component/AddView';
import './homepage.scss'
import {userActions} from '../_actions';

function HomePage() {
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    const [panelIndex, setPanelIndex] = useState(0);

    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

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
        </div>
    );
}

export {HomePage}