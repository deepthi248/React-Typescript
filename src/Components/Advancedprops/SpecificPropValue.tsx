import React from 'react'
type statusProps = {
    status: "loading" | 'error' | 'success'
}
function Status(props: statusProps) {
    return (
        <div> {` The status is ${props.status}`}</div>
    )
}

export default Status