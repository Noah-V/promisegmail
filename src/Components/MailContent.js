import { IconButton } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import '../css/MailContent.css'
import { useNavigate } from 'react-router-dom';
function MailContent() {
  
  const navigate = useNavigate();
  return (
    <div className="mail-content">
      <div className="icons">
        <div>
          <IconButton onClick={()=> {
              navigate("/")
              document.getElementById('mails').style.flex = '1';
              document.getElementById('mailContent').style.flex = '0';
            }}>
            <ArrowBackIosNewIcon/>
          </IconButton>
          <div id="base"><p>Promoting offers</p></div>
        </div>
        <div className="mail-actions">
          <span className="material-icons">print</span>
          <span className="material-icons">delete</span>
        </div>
      </div>
      <div>
        <div className="mailer">
        </div>
        <div className="content"></div>
        <div className="reply-area">
          <textarea id="mytextarea" name="reply"  cols="60" rows="30" placeholder="Write your message..." style={{height: "100px"}}></textarea>
          <div className="action-icons">
            <div className="attachment">
              <span className="material-icons">attachment</span>
            </div>
            <div className="del-send">
              <span className="material-icons">delete</span>
              <button type="submit">Send
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MailContent