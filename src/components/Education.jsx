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
            {universityName}
            <button onClick={(e) => handleDeleteEducationList(e, educationId)}>Delete Education</button>
            <button onClick={(e) => handleActivateEdit(e, educationId)}>edit Education</button>
            {isEditActive ?
                <div>
                    {/* name prop is used to set to be edited object */}
                    <input placeholder={educationData.universityName} name={"universityName"} onChange={handleEducationDataChange} />
                    <input placeholder={educationData.degree} name={"degree"} onChange={handleEducationDataChange} />
                    <input placeholder={educationData.startDate} name={"startDate"} onChange={handleEducationDataChange} />
                    <input placeholder={educationData.endDate} name={"endDate"} onChange={handleEducationDataChange} />
                    <button onClick={(e) => handleEditEducationList(e,
                        educationId,
                        educationData.universityName,
                        educationData.degree,
                        educationData.startDate,
                        educationData.endDate)}>edit Education</button>
                </div> : null
            }
        </>
    )
}

export default Education;