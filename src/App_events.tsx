import React from 'react'
import './App.css'
import ButtonClickEvent from './Components/Events /ButtonClickEvent'
import InputChange from './Components/Events /InputChange'

function App_events() {
    return (
        <div>
            <ButtonClickEvent handleClick={(event, id) => {
                alert(event + " " + id)
            }} />
            <InputChange value="" onchange={(event) => console.log(event)} />
        </div>
    )
}

export default App_events