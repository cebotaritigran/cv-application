import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Pdf';
import '../styles/App.css'
import Header from './Header'

function App() {


  return (
    <>
      <div className="app-container">
        <div className='edit-section'>
          <Header />
        </div>
        <div className='preview-section'>
          <PDFViewer className='pdf-container'>
            <MyDocument />
          </PDFViewer>
        </div>

      </div>

    </>
  )
}

export default App
