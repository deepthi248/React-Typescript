import React from 'react'
type handleInput = {
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}
// function InputChange(props: handleInput) {
function InputChange({ onchange, value }: handleInput) { //destructure
    return (
        <div>
            <input value={value} onChange={(event) => onchange(event)} />
            <p> </p>
        </div >
    )
}

export default InputChange