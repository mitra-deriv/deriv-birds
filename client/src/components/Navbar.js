import React, {useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import {AuthContext} from '../context/Auth.context';

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout();
        history.push('/');
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
                <span className="brand-logo">Logo</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="#">Games</NavLink></li>
                    <li><NavLink to="/history">History</NavLink></li>
                    <li><NavLink to="/about_us">About us</NavLink></li>
                    <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    )
}
