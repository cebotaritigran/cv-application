import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Pdf';
import '../styles/App.css'
import Header from './Header'
import Personal from './Personal'
import { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [linkedIn, setLinkedIn] = useState('linkedin.com/in/johndoe');
  const [github, setGithub] = useState('github.com/johndoe');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleLinkedInChange(e) {
    setLinkedIn(e.target.value);
  }
  function handleGithubChange(e) {
    setGithub(e.target.value);
  }

  return (
    <>
      <div className="app-container">
        <div className='edit-section'>
          <Header />
          <Personal firstName={firstName}
            handleFirstNameChange={handleFirstNameChange}
            lastName={lastName}
            handleLastNameChange={handleLastNameChange}
            email={email}
            handleEmailChange={handleEmailChange}
            phone={phone}
            handlePhoneChange={handlePhoneChange}
            linkedIn={linkedIn}
            handleLinkedInChange={handleLinkedInChange}
            github={github}
            handleGithubChange={handleGithubChange}></Personal>
        </div>
        <div className='preview-section'>
          <PDFViewer className='pdf-container'>
            <MyDocument
              firstName={firstName}
              lastName={lastName} 
              email={email}
              phone={phone}
              linkedIn={linkedIn}
              github={github}
              />
          </PDFViewer>
        </div>

      </div>

    </>
  )
}

export default App
