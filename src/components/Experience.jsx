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
            <div>{companyName}</div>

            <button onClick={(e) => handleDeleteExperienceList(e, experienceId)}>Delete Experience</button>
            <button onClick={(e) => handleActivateEdit(e, experienceId)}>edit Experience</button>
            {isEditActive ?
                <div>
                    {/* name prop is used to set to be edited object */}
                    <input placeholder={experienceData.companyName} name={"companyName"} onChange={handleExperienceDataChange} />
                    <input placeholder={experienceData.position} name={"position"} onChange={handleExperienceDataChange} />
                    <input placeholder={experienceData.jobDescription} name={"jobDescription"} onChange={handleExperienceDataChange} />
                    <input placeholder={experienceData.startDate} name={"startDate"} onChange={handleExperienceDataChange} />
                    <input placeholder={experienceData.endDate} name={"endDate"} onChange={handleExperienceDataChange} />
                    <button onClick={(e) => handleEditExperienceList(e,
                        experienceId,
                        experienceData.companyName,
                        experienceData.position,
                        experienceData.jobDescription,
                        experienceData.startDate,
                        experienceData.endDate)}>edit Experience</button>
                </div> : null
            }
        </>
    )
}

export default Experience;