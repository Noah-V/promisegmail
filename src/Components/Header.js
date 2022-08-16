import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import '../css/Header.css';
import Mailbox from './Mailbox';
import Mails from './Mails';

function Header() {


    const shrinkMailBoxes = ()=> {
        var mailMenu = document.getElementById('mailbox');
        var mailMenuContainer = document.getElementById('mailbox-container')
        mailMenu.classList.toggle("shrinkMailBox"); 
        mailMenuContainer.classList.toggle("shrinkMailBox-container");
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
        </div>
    )
}

export default Header