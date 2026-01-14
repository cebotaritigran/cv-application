import '../styles/Projects.css';
import { useState } from 'react';

function Projects({
    projectId,
    projectName,
    handleDeleteProjectList,
    handleEditProjectList,
    projectDescription
}) {
    // state to manage edit mode
    const [isEditActive, setIsEditActive] = useState(false);

    // state to manage experience data
    // initialized with props from appjs
    // so that we can edit them easily
    const [projectData, setProjectData] = useState({
        projectName: projectName,
        projectDescription: projectDescription
    });

    function handleActivateEdit() {
        setIsEditActive(!isEditActive);
    }

    // function to handle changes in education data inputs these are going to be edited on App.jsx
    function handleProjectDataChange(e) {
        setProjectData({
            ...projectData,
            [e.target.name]: e.target.value
        });
    }
    return (
        <>
            <div className='section-container '>
                {!isEditActive ? <div className='initial-container'>
                    <div className='name-container'>{projectName}</div>
                    <button className='edit-delete' onClick={(e) => handleDeleteProjectList(e, projectId)}>Delete</button>
                    <button className='edit-delete' onClick={(e) => handleActivateEdit(e, projectId)}>{isEditActive ? "Close Edit" : "Open Edit"}</button>
                </div> : null}
                {isEditActive ?
                    <div className='input-container'>
                        {/* name prop is used to set to be edited object */}
                        <input placeholder={projectData.projectName} name={"projectName"} onChange={handleProjectDataChange} />
                        <input placeholder={projectData.projectDescription} name={"projectDescription"} onChange={handleProjectDataChange} />
                        <button onClick={(e) => {
                            handleEditProjectList(e,
                                projectId,
                                projectData.projectName,
                                projectData.projectDescription,
                            )
                            handleActivateEdit()
                        }}>Edit Project</button>
                    </div> : null
                }
            </div>
        </>
    )
}

export default Projects;