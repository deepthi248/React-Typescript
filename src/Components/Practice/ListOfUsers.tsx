import React from 'react'
import User from './user'
import { userType } from './UserType'
type userListType = {
    users: userType[]
}
function ListOfUsers(props: userListType) {

    return (
        <div>
            {
                props.users.map(user => {
                    <User name={user.name} email={user.email} />
                })
            }
        </div>
    )
}

export default ListOfUsers