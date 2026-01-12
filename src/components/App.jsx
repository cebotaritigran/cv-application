import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from './Pdf';
import '../styles/App.css'
import Header from './Header'
import Personal from './Personal'
import Education from "./Education";
import Experience from './Experience';
import { useState } from 'react';

function App() {

  // ***PERSONAL INFO SECTION***
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

  // ***EDUCATION SECTION***

  const [educationList, setEducationList] = useState([
    {
      universityName: 'University A',
      degree: 'B.Sc. in Computer Science',
      startDate: '2015',
      endDate: '2019',
      id: crypto.randomUUID()
    }
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

  function handleAddEducationList() {
    setEducationList([
      ...educationList,
      {
        universityName: 'New University',
        degree: 'Degree', startDate: 'Start Date', endDate: 'End Date', id: crypto.randomUUID()
      }
    ]);
  }


  // ***EXPERIENCE SECTION***

  const [experienceList, setExperienceList] = useState([
    {
      companyName: 'Company A',
      position: 'software developer',
      jobDescription: 'text',
      startDate: '2019',
      endDate: '2019',
      id: crypto.randomUUID()
    }
  ]);

  // function to delete eexperience entry we delete through returning all array without the given id
  function handleDeleteExperienceList(e, experienceId) {
    const id = experienceId;
    let newExperienceList = experienceList.filter((experience) => experience.id !== id);
    setExperienceList(newExperienceList);
  }

  // function to edit eexperience entry we get the new values from Education.jsx through props
  function handleEditExperienceList(e,
    experienceId,
    newCompanyName,
    newPosition,
    newJobDescription,
    newStartDate,
    newEndDate) {
    setExperienceList(experienceList.map((experience) => {
      if (experience.id === experienceId) {
        return {
          ...experience,
          companyName: newCompanyName,
          position: newPosition,
          jobDescription: newJobDescription,
          startDate: newStartDate,
          endDate: newEndDate
        }
      } else {
        return experience;
      }
    }))
  }

  function handleAddExperienceList() {
    setExperienceList([
      ...experienceList,
      {
        companyName: 'New University',
        position: 'Degree',
        jobDescription: "test",
        startDate: 'Start Date',
        endDate: 'End Date',
        id: crypto.randomUUID()
      }
    ]);
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
          {/* Education */}
          <h2>Education</h2>
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
          <button onClick={() => handleAddEducationList()}>Add Education</button>
          {/* Experience */}
          <h2>Experience</h2>
          {experienceList.map((experience) => (
            < Experience
              experienceId={experience.id}
              companyName={experience.companyName}
              handleDeleteExperienceList={handleDeleteExperienceList}
              handleEditExperienceList={handleEditExperienceList}
              experiencePosition={experience.position}
              experienceJobDescription={experience.jobDescription}
              experienceStartDate={experience.startDate}
              experienceEndDate={experience.endDate}
              key={experience.id} />
          ))
          }
          <button onClick={() => handleAddExperienceList()}>Add Experience</button>
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
