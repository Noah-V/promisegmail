import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import '../css/Header.css';
import Mailbox from './Mailbox';

function Header() {


    const shrinkMailBoxes = ()=> {
        var mailMenu = document.getElementById('mailbox');
        mailMenu.classList.toggle("shrinkMailBox"); 
    }

    
    return (
        <div className='header-container'>
            <div className='header'>
                <div className="appLabel">
                    <div className='menu' onClick={shrinkMailBoxes}>
                        <IconButton>
                            <MenuIcon/>
                        </IconButton>
                    </div>
                    <div>
                        <img src={require('../images/newgmaillogo.jpg')} alt=""/>
                    </div>
                </div>
                <div className="search-div">
                    <input type="search" name="" placeholder="Search" id="" className="search-bar"/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </div>
            <div className='body'>
                <Mailbox/>
            </div>
        </div>
    )
}

export default Header