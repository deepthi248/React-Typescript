import React, { useState } from 'react'
type AssuserAuth = {
    name: string,
    email: string,
    handleNameChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function Adduser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    return (
        <div>
            <input value={name} onChange={(event) => handleNameChange(event)} />
            <input value={name} onChange={(event) => handleEmailChange(event)} />
            <button onClick={() => Adduser(name, email)}></button>
        </div>
    )
}

export default Adduser