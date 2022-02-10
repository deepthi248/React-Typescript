import React, { useState } from 'react'
type InputType = {
    value: string
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
}
function RenderTheInput({ value, handleInput }: InputType) {
    return (
        <div>
            <input value={value} onChange={(event) => handleInput(event)} />
        </div>
    );
}

export default RenderTheInput;