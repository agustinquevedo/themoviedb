import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.svg';

function Navbar(){

    const [isActive, setisActive] = useState(false)

    return (
        <nav className="navbar is-fixed-top is-primary" role="navigation" aria-label="main navigation">
            <div className="container is-max-desktop">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={Logo} alt="The Movie Data Base" width="150"/>
                    </div>
                    <button
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} 
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarMenu'
                    onClick={() => {setisActive(!isActive)}}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>
                <div id='navbarMenu' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <Link className="navbar-item" to="/" onClick={() => {setisActive(!isActive)}}>
                            Search
                        </Link>
                        <Link className="navbar-item" to="/favorites" onClick={() => {setisActive(!isActive)}}>
                            Favorites
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;