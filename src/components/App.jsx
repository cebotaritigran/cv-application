import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Pdf';
import '../styles/App.css'
import Header from './Header'
import Personal from './Personal'
import Education from "./Education";
import { useState } from 'react';

function App() {

  // Personal Information Section
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    linkedIn: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe'
  });


  function handlePersonalInfoChange(e, key) {
    setPersonalInfo({
      ...personalInfo,
      [key]: e.target.value
    });
  }

  // Education Section

  const [educationList, setEducationList] = useState([
    { universityName: 'University A', degree: 'B.Sc. in Computer Science', startDate: '2015', endDate: '2019', id: crypto.randomUUID() }
  ]);

  // function to delete education entry we delete through returning all array without the given id
  function handleDeleteEducationList(e, educationId) {
    const id = educationId;
    let newEducationList = educationList.filter((education) => education.id !== id);
    setEducationList(newEducationList);
  }

  // function to edit education entry we get the new values from Education.jsx through props
  function handleEditEducationList(e, educationId, newUniversityName, newDegree, newStartDate, newEndDate) {
    setEducationList(educationList.map((education) => {
      if (education.id === educationId) {
        return {
          ...education,
          universityName: newUniversityName,
          degree: newDegree,
          startDate: newStartDate,
          endDate: newEndDate
        }
      } else {
        return education;
      }
    }))

  }



  return (
    <>
      <div className="app-container">
        <div className='edit-section'>
          <Header />
          <Personal firstName={personalInfo.firstName}
            handleFirstNameChange={(e) => handlePersonalInfoChange(e, "firstName")}
            lastName={personalInfo.lastName}
            handleLastNameChange={(e) => handlePersonalInfoChange(e, "lastName")}
            email={personalInfo.email}
            handleEmailChange={(e) => handlePersonalInfoChange(e, "email")}
            phone={personalInfo.phone}
            handlePhoneChange={(e) => handlePersonalInfoChange(e, "phone")}
            linkedIn={personalInfo.linkedIn}
            handleLinkedInChange={(e) => handlePersonalInfoChange(e, "linkedIn")}
            github={personalInfo.github}
            handleGithubChange={(e) => handlePersonalInfoChange(e, "github")}>
          </Personal>
          {educationList.map((education) => (
            < Education
              educationId={education.id}
              universityName={education.universityName}
              handleDeleteEducationList={handleDeleteEducationList}
              handleEditEducationList={handleEditEducationList}
              educationDegree={education.degree}
              educationStartDate={education.startDate}
              educationEndDate={education.endDate}
              key={education.id} />
          ))
          }

        </div>
        <div className='preview-section'>
          <PDFViewer className='pdf-container'>
            <MyDocument
              firstName={personalInfo.firstName}
              lastName={personalInfo.lastName}
              email={personalInfo.email}
              phone={personalInfo.phone}
              linkedIn={personalInfo.linkedIn}
              github={personalInfo.github}
            />
          </PDFViewer>
        </div>

      </div>

    </>
  )
}

export default App
