import React from 'react';
import './Navbar.css';
import { PageContent } from './HomePage.js';
import Logo from './images/logo.png';

export class Navbar extends React.Component{

    state = {
        menuIsOpened: false,
    }
    
    render() {

        const comuteMenu = () => {
            this.setState({menuIsOpened: !this.state.menuIsOpened});
        }

        return (
            <>
            <div className='container'>
                <div className='Navbar'>
                    <img className='Logo' src={Logo} width= '140vw' height='auto'/>
                    <input className='SearchBar' type='text' placeholder='Search...'/>
                    <ul className='NavLinks'>
                        <li ><a href="/">Home</a></li>
                        <li><a onClick={comuteMenu}>{this.state.menuIsOpened ? "Data ▼" : "Data ▲"}</a></li>
                        <li ><a href="add-data">Add Data</a></li>
                        <li className='logoutButt'><a href=""><strong>Log Out</strong></a></li>
                    </ul>
                </div>
                <div className={this.state.menuIsOpened ? 'MoreOptions-Opened' : 'MoreOptions-Closed'}>
                    <ul>
                        <li ><a href="">Meals</a></li>
                        <li ><a href="">Kids</a></li>
                        <li ><a href="">Classroms</a></li>
                    </ul>
                </div>
            </div>
            </>
        );
    }
}
