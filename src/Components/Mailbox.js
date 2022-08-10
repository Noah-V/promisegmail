import React from 'react';
import InboxIcon from '@mui/icons-material/Inbox';
import { IconButton } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import StarIcon from '@mui/icons-material/Star';
import ModeIcon from '@mui/icons-material/Mode';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MailContent from './MailContent';
import '../css/Mailbox.css'
import AddBoxIcon from '@mui/icons-material/AddBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LabelIcon from '@mui/icons-material/Label';


function Mailbox() {

  return (
    <div className='mailbox shrinkMailBox' id='mailbox'>
        <div className="mail-types" id='mail-types'>
            <div className="mail-boxes">
                <div className="inbox mail-box">
                  <InboxIcon/>
                  <h4>Inbox</h4>
                </div>
                <div className="sent-emails mail-box">
                  <TelegramIcon/>
                  <h4>Sent Emails</h4>
                </div>
                <div className="favourite mail-box">
                  <StarIcon/>
                  <h4>Favorites</h4>
                </div>
                <div className="draft mail-box">
                  <ModeIcon/>
                  <h4>Drafts</h4>
                </div>
                <div className="deleted mail-box">
                  <DeleteOutlineIcon/>
                  <h4>Deleted Mail</h4>
                </div>
                <div className="more mail-box">
                  <ExpandMoreIcon/>
                  <h4>More</h4>
                </div>
            </div>
            <div className="mail-labels">
                <div className="label-menu">
                  <h4>Labels</h4>
                  <div className="label-menu-options">
                    <IconButton>
                      <AddBoxIcon className='addboxIcon'/>
                    </IconButton>
                    <IconButton>
                      <MoreVertIcon/>
                    </IconButton>
                  </div>
                </div>
                <div className="label-types">
                  <div className="work">
                    <LabelIcon/>
                    <h4>Work</h4>
                  </div>
                  <div className="promoting-offers">
                    <LabelIcon/>
                    <h4>Promoting Offers</h4> 
                  </div>
                  <div className="work-in-progress">
                    <LabelIcon/>
                    <h4>Work in progress</h4>
                  </div>
                  <div className="in-acceptance">
                    <LabelIcon/>
                    <h4>In Acceptance</h4>
                  </div>
                  <div className="Read Later">
                    <LabelIcon/>
                    <h4>Read Later</h4>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mailbox