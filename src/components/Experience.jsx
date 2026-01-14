import { useState } from 'react';

function Experience({
    experienceId,
    companyName,
    handleDeleteExperienceList,
    handleEditExperienceList,
    experiencePosition,
    experienceJobDescription,
    experienceStartDate,
    experienceEndDate
}) {
    // state to manage edit mode
    const [isEditActive, setIsEditActive] = useState(false);
    // state to manage experience data
    // initialized with props from appjs
    // so that we can edit them easily

    const [experienceData, setExperienceData] = useState({
        companyName: companyName,
        position: experiencePosition,
        jobDescription: experienceJobDescription,
        startDate: experienceStartDate,
        endDate: experienceEndDate
    });

    function handleActivateEdit() {
        setIsEditActive(!isEditActive);
    }

    // function to handle changes in education data inputs these are going to be edited on App.jsx
    function handleExperienceDataChange(e) {
        setExperienceData({
            ...experienceData,
            [e.target.name]: e.target.value
        });
        console.log(experienceData);
    }


    return (
        <>
            <div className='section-container '>
                {!isEditActive ? <div className='initial-container'>
                    <div className='name-container'>{companyName}</div>
                    <button className='edit-delete' onClick={(e) => handleDeleteExperienceList(e, experienceId)}>Delete</button>
                    <button className='edit-delete' onClick={(e) => handleActivateEdit(e, experienceId)}>{isEditActive ? "Close Edit" : "Open Edit"}</button>
                </div> : null}
                {isEditActive ?
                    <div className='input-container'>
                        {/* name prop is used to set to be edited object */}
                        <label>Company Name:</label>
                        <input placeholder={experienceData.companyName} name={"companyName"} onChange={handleExperienceDataChange} />
                        <label>Position:</label>
                        <input placeholder={experienceData.position} name={"position"} onChange={handleExperienceDataChange} />
                        <label>Job Description:</label>
                        <input placeholder={experienceData.jobDescription} name={"jobDescription"} onChange={handleExperienceDataChange} />
                        <label>Start Date:</label>
                        <input placeholder={experienceData.startDate} name={"startDate"} onChange={handleExperienceDataChange} />
                        <label>End Date:</label>
                        <input placeholder={experienceData.endDate} name={"endDate"} onChange={handleExperienceDataChange} />
                        <button onClick={(e) => {
                            handleEditExperienceList(e,
                                experienceId,
                                experienceData.companyName,
                                experienceData.position,
                                experienceData.jobDescription,
                                experienceData.startDate,
                                experienceData.endDate)
                            handleActivateEdit()
                        }}>Edit Experience</button>
                    </div> : null
                }
            </div>
        </>
    )
}

export default Experience;