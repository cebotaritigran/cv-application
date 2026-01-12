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
            <div>{projectName}</div>

            <button onClick={(e) => handleDeleteProjectList(e, projectId)}>Delete Project</button>
            <button onClick={(e) => handleActivateEdit(e, projectId)}>edit Project</button>
            {isEditActive ?
                <div>
                    {/* name prop is used to set to be edited object */}
                    <input placeholder={projectData.projectName} name={"projectName"} onChange={handleProjectDataChange} />
                    <input placeholder={projectData.projectDescription} name={"projectDescription"} onChange={handleProjectDataChange} />

                    <button onClick={(e) => handleEditProjectList(e,
                        projectId,
                        projectData.companyName,
                        projectData.position,
                    )}>edit Project</button>
                </div> : null
            }

        </>
    )
}

export default Projects;