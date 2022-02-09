import React from 'react'
type childrenProps = {
    children: React.ReactNode
}
function ChildrenInsideComponent(props: childrenProps) {
    return (
        <div style={{ padding: "20px" }}>Inside a nested child component{props.children}</div>
    )
}

export default ChildrenInsideComponent