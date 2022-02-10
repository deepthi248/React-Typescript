import React, { useState } from 'react'
import RenderTheInput from './Components/Practice/RenderTheInput'

function App_practice() {
    const [Input, setInput] = useState('');

    return (
        <div>
            <RenderTheInput value={Input} handleInput={(event) => {
                setInput(event.target.value)
                console.log(event.target.value)
            }} />
            <p>{Input}</p>
        </div>
    )
}

export default App_practice