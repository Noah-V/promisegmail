import React from 'react'
import Mail from './Mail'
import '../css/Mails.css'
import { Route, Routes } from 'react-router-dom'
import MailContent from './MailContent'
import { style } from '@mui/system'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Checkbox } from '@mui/material'
import Star from '@mui/icons-material/Star'
import PrintIcon from '@mui/icons-material/Print';
import LaunchIcon from '@mui/icons-material/Launch';
import StarIcon from '@mui/icons-material/Star';
import ReplyIcon from '@mui/icons-material/Reply';
import Reply from '@mui/icons-material/Reply'
import MoreVert from '@mui/icons-material/MoreVert'

function SimpleAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="accordMid">
            <div className="accordRight">
              <Checkbox/>
              <Star/>
              <Typography>
                Username
              </Typography>
            </div>
            <div className="accord-mid-Main">
              <Typography>
                Subject
              </Typography>
              <p>Click here to see content</p>
            </div>
            <div className="accord-mid-date">
              <Typography>
                TimeStamp
              </Typography>
            </div>
          </div>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-details">
            <div className="accordion-details-top">
              <p>Subject</p>
              <div className="accord-details-top-right">
                <PrintIcon/>
                <LaunchIcon/>
              </div>
            </div>
            <div className="accord-details-info">
              <Avatar/>
              <div className="sender-info">
                <h4>Sender Name<small>Email</small></h4>
                <small>To Mail</small>
              </div>
              <div className="sender-info-date">
                <div className="sender-info-date-option">
                  <small>Timestamp</small>
                  <StarIcon/>
                  <ReplyIcon/>
                  <MoreVert/>
                </div>
              </div>
            </div>
            <div className="mail-content">
              <div className="mail-content-accordion">
              </div>
              <ReplyMails/>
              <ForwardMails/>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const ReplyMails = ()=> {

}

const ForwardMails = ()=> {

}

function Mails() {

  const [shrinkMail, setShrinkMail] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  const ifMailSelected = ()=> {
    console.log(shrinkMail)
    const mailSection = document.getElementById('mails');
    const mailContent = document.getElementById("mailContent");
    mailSection.addEventListener('click', ()=> {
      mailSection.style.flex = "0.5";
      mailContent.style.flex = "1";
      mailSection.style.alignItems = 'center';
      setShrinkMail(true)
    })
    console.log(shrinkMail)
  }

  return (
    <div className="mails-et-mailContent">
      <div className='mails-et-mailContent-main'>
        <div className="mails mails-active" id='mails' onClick={shrinkMail && ifMailSelected}>
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected}
          />
          <SimpleAccordion/>
        </div>
        <div className='mailContent' id='mailContent'>
          <Routes>
            <Route path="/mail" element={<MailContent/>}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Mails;