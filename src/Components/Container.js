import React from 'react'
import Header from './Header'
import Mailbox from './Mailbox'
import '../css/Container.css';
import Mail from './Mail';
import Mails from './Mails';
import Modal from 'react-modal';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import TextFormatIcon from '@mui/icons-material/TextFormat';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ScreenLockRotationIcon from '@mui/icons-material/ScreenLockRotation';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import Delete from '@mui/icons-material/Delete';

function Container() {

  const [modalOpen, setModalOpen] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [subject, setSubject] = React.useState('');
  const [content, setContent] = React.useState('');
  const [recipient, setRecipient] = React.useState('');
  

  return (
    <div className='container'>
        <Header/>
        <div className='body'>
            <Mailbox/>
            <Mails/>
            <div className='compose'>
              <img 
                onClick={()=> setModalOpen(true)}
                src={"https://www.gstatic.com/images/icons/material/colored_icons/2x/create_32dp.png"} 
                alt="compose"
              />
            </div>
            <Modal
              isOpen={modalOpen}
              onRequestClose={()=> setModalOpen(false)}
              shouldCloseOnOverlayClick={false}
              style={{
                overlay: {
                  width: 680,
                  height: "auto",
                  backgroundColor: "rgba(0,0,0,0.8)",
                  zIndex: "1000",
                  top: "50%",
                  left: "50%",
                  marginTop: "-250px",
                  marginLeft: "-350px",
                  borderRadius: "none",
                },
                content: {
                  margin: 0,
                  padding: 0,
                  border: "none",
                }
              }}
            >
              <div className='modal-container'>
                <div className="modal-container-top">
                  <div className="modal-header">
                    <p>New Message</p>
                    <div className="modal-header-icons">
                      <IconButton onClick={()=> setModalOpen(false)}>
                        <CloseIcon/>
                      </IconButton>
                    </div>
                  </div>
                  <div className="modal-recipient" onClick={()=> setFocus(true)}>
                    <p>{focus ? "To" : "Recipients"}</p>
                    <input
                      value={recipient}
                      onChange={(e) => setRecipient(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="modal-recipient">
                    <input
                      value={subject}
                      onChange={(e)=> setSubject(e.target.value)}
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="quill">
                    <ReactQuill
                      value={content}
                      onChange={(value)=> setContent(value)}
                      placeholder="Compose your mail..."
                    />
                  </div>
                </div>
                <div className="modal-container-bottom">
                  <div className="modal-bottom">
                    <button>Send</button>
                    <TextFormatIcon/>
                    <AttachFileIcon/>
                    <LinkIcon/>
                    <SentimentSatisfiedAltIcon/>
                    <InsertPhotoIcon/>
                    <ScreenLockRotationIcon/>
                    <div className="modal-bottom-last">
                      <MoreVertIcon/>
                      <Delete/>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
        </div>
    </div>
  )
}

export default Container