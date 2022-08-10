import React from 'react';
import Mailbox from './Components/Mailbox';
import { Routes, Route, Link } from "react-router-dom";
import './css/App.css';
import MailContent from './Components/MailContent';
import Mails from './Components/Mails';
import Header from './Components/Header';
import Container from './Components/Container';


function App() {
  return (
    <div className="App">
      <Container/>
      <Routes>
        <Route path='*' element={<Mails/>}/>
      </Routes>
    </div>
  );
}

export default App;
