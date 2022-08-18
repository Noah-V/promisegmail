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
import { Checkbox } from '@mui/material'
import Star from '@mui/icons-material/Star'

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
                
              </Typography>
            </div>
          </div>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
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


function Mails() {

  const [shrinkMail, setShrinkMail] = React.useState(false);
  const [selected, setSelected] = React.useState(false);
  // console.log(selected)

  const ifSelected = ()=> {
    setSelected(!selected)
    // console.log(selected)
  }

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

  // const [mails, setMails] = React.useState([]);

  // const getEmails = ()=> {
  //   setMails(
  //     {
  //       id: Math.floor(Math.random() + 1),
  //       message: ""
  //     }
  //   )
  // }

  const expandMails = ()=> {
    
  }

  return (
    <div className="mails-et-mailContent">
      <div className='mails-et-mailContent-main'>
        <div className="mails mails-active" id='mails' onClick={shrinkMail && ifMailSelected}>
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected}
            // handleSelected={ifSelected}
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