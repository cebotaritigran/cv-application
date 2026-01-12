import '../styles/Skills.css';
import { useState } from 'react';

function Projects({
    skillId,
    skillName,
    handleDeleteSkillsList,
    handleEditSkillsList
}) {
    // state to manage edit mode
    const [isEditActive, setIsEditActive] = useState(false);

    // state to manage experience data
    // initialized with props from appjs
    // so that we can edit them easily
    const [skillData, setskillData] = useState({
        skillName: skillName

    });

    function handleActivateEdit() {
        setIsEditActive(!isEditActive);
    }

    // function to handle changes in education data inputs these are going to be edited on App.jsx
    function handleSkillDataChange(e) {
        setskillData({
            ...skillData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <div>{skillName}</div>

            <button onClick={(e) => handleDeleteSkillsList(e, skillId)}>Delete Project</button>
            <button onClick={(e) => handleActivateEdit(e, skillId)}>edit Project</button>
            {isEditActive ?
                <div>
                    {/* name prop is used to set to be edited object */}
                    <input placeholder={skillData.skillName} name={"skillName"} onChange={handleSkillDataChange} />
                    <button onClick={(e) => handleEditSkillsList(e,
                        skillId,
                        skillData.companyName
                    )}>edit Skill</button>
                </div> : null
            }

        </>
    )
}

export default Projects;