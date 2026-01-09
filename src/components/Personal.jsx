import '../styles/Personal.css';


function Personal({ firstName,
    handleFirstNameChange,
    lastName,
    handleLastNameChange,
    email,
    handleEmailChange,
    phone,
    handlePhoneChange,
    linkedIn,
    handleLinkedInChange,
    github,
    handleGithubChange }) {





    return (
        <>
            <label >First Name:</label>
            <input

                placeholder=''
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <label>Last Name:</label>
            <input
                placeholder=''
                value={lastName}
                onChange={handleLastNameChange}
            />
            <label>Email:</label>
            <input
                placeholder=''
                value={email}
                onChange={handleEmailChange} />
            <label>Phone Number:</label>
            <input
                placeholder=''
                value={phone}
                onChange={handlePhoneChange} />
            <label>Linkedin:</label>
            <input
                placeholder=''
                value={linkedIn}
                onChange={handleLinkedInChange} />
            <label>Github:</label>
            <input
                placeholder=''
                value={github}
                onChange={handleGithubChange} />
        </>
    )
}

export default Personal;