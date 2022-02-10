import React, { useState } from 'react'
import Adduser from './Components/Practice/Adduser'
import ListOfUsers from './Components/Practice/ListOfUsers'
import { userType } from './Components/Practice/UserType'

function App_user() {
    const [user, setUser] = useState<userType>();
    return (
        <div>
            <Adduser handleNameChange={(event) => { setUser({ ...user, name: event.target.value }) }}
                handleEmailChange
            />


        </div>
    )
}

export default App_user