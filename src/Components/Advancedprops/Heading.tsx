import React from 'react'
type propsChildren = {
    children: string;
}
function Heading(props: propsChildren) {
    return (
        <div>{props.children}</div>
    )
}

export default Heading