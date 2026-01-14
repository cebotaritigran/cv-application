import '../styles/Education.css';
import { useState } from 'react';

// Education Component
// we get all the props from App.jsx
// including the function to delete education entry
// and the education details
// we also added handleEditEducationList to edit education entry

function Education({ educationId,
    universityName,
    handleDeleteEducationList,
    handleEditEducationList,
    educationDegree,
    educationStartDate,
    educationEndDate
}) {
    // state to manage edit mode
    const [isEditActive, setIsEditActive] = useState(false);
    // state to manage education data
    // initialized with props from appjs
    // so that we can edit them easily
    const [educationData, setEducationData] = useState({
        universityName: universityName,
        degree: educationDegree,
        startDate: educationStartDate,
        endDate: educationEndDate
    });

    function handleActivateEdit() {
        setIsEditActive(!isEditActive);
    }

    // function to handle changes in education data inputs these are going to be edited on App.jsx
    function handleEducationDataChange(e) {
        setEducationData({
            ...educationData,
            [e.target.name]: e.target.value
        });
        console.log(educationData);
    }


    return (
        <>
            <div className='section-container '>
                {!isEditActive ?
                    <div className='initial-container'>
                        <div className='name-container'>{universityName}</div>
                        <button className='edit-delete' onClick={(e) => handleDeleteEducationList(e, educationId)}>Delete</button>
                        <button className='edit-delete' onClick={(e) => handleActivateEdit(e, educationId)}>{isEditActive ? "Close Edit" : "Open Edit"}</button>
                    </div> : null}

                {isEditActive ?
                    <div className='input-container'>
                        {/* name prop is used to set to be edited object */}
                        <label>University Name:</label>
                        <input placeholder={educationData.universityName} name={"universityName"} onChange={handleEducationDataChange} />
                        <label>Degree:</label>
                        <input placeholder={educationData.degree} name={"degree"} onChange={handleEducationDataChange} />
                        <label>Start Date:</label>
                        <input placeholder={educationData.startDate} name={"startDate"} onChange={handleEducationDataChange} />
                        <label>Start Date:</label>
                        <input placeholder={educationData.endDate} name={"endDate"} onChange={handleEducationDataChange} />
                        <button className='edit-delete' onClick={(e) => {

                            handleEditEducationList(e,
                                educationId,
                                educationData.universityName,
                                educationData.degree,
                                educationData.startDate,
                                educationData.endDate)
                            handleActivateEdit()
                        }}>Edit Education</button>
                    </div> : null
                }
            </div>
        </>
    )
}

export default Education;