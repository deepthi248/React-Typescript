import React from 'react'
import { userType } from './UserType'

function User({ name, email }: userType) {
    return (
        <div>
            <p>{name}</p>
            <p>{email}</p>
        </div>
    )
}

export default User