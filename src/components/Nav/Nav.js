import React, { Component } from 'react';
import logo from '../Nav/thingtech.png';
import menu from '../Nav/menu.png';
import '../Nav/Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav>
                <img src={logo} alt="thingtech"/>
                <img src={menu} alt="menu" style={{width: '2.5%'}}/>
            </nav>
        )
    }
}

export default Nav;