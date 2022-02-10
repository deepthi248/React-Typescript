import React from 'react'
type handleClickType = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
function ButtonClickEvent(props: handleClickType) {
    return (
        <div>
            <button onClick={(event) => props.handleClick(event, 20)}>Click Me</button>
        </div>
    )
}

export default ButtonClickEvent