import React from 'react'
import Header from './Header'
import Mailbox from './Mailbox'
import '../css/Container.css';
import Mail from './Mail';
import Mails from './Mails';

function Container() {
  return (
    <div className='container'>
        <Header/>
        <div className='body'>
            <Mailbox/>
            <Mails/>
        </div>
    </div>
  )
}

export default Container