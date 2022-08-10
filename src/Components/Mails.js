import React from 'react'
import Mail from './Mail'
import '../css/Mails.css'
import { Route, Routes } from 'react-router-dom'
import MailContent from './MailContent'
import { style } from '@mui/system'
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
          {/* {mails.map(mail => (
            <Mail
              sender="Jessica"
              synopsis="Who givessss"
              selected={selected}
              handleSelected={ifSelected}
            />
          ))} */}
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected}
            handleSelected={ifSelected}
          />
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected} 
            handleSelected={ifSelected}
          />
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected}
            // handleSelected={ifSelected}
            
          />
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            // selected={selected}
            // handleSelected={ifSelected}
            
          />
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected}
            // handleSelected={ifSelected}
            
          />
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected}
            // handleSelected={ifSelected}
            
          />
          <Mail
            sender="Jessica"
            synopsis="Who givessss"
            selected={selected}
            // handleSelected={ifSelected}
          />  
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

export default Mails