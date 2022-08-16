import React from 'react'
import Header from './Header'
import Mailbox from './Mailbox'
import '../css/Container.css';
import Mail from './Mail';
import Mails from './Mails';
import Modal from 'react-modal';

function Container() {

  const [modalOpen, setModalOpen] = React.useState(false);

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
              <div className='modal'>
                <h1>This is modal</h1>
              </div>
            </Modal>
        </div>
    </div>
  )
}

export default Container