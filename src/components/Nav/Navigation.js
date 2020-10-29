import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigaiton.css';

const Navigation = props => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <NavLink exact activeClassName="active" to="/">My Products</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/favorites">Favorites</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="active" to="/auth">Authenticate</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;