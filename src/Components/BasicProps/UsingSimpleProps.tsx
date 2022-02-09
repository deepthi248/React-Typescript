import React from 'react'
type GreetProps = {
    stringProp: string
    booleanProp_isLoggedIn: boolean
    numberProps: number
}
function UsingSimpleProps(props: GreetProps) {
    return (
        <div>
            <h1>{
                props.booleanProp_isLoggedIn ? `Hi ${props.stringProp}!! Welcome :-) 
                    You have ${props.numberProps} unread messages` : `Welcome Guest`
            }

            </h1>
        </div>
    )
}

export default UsingSimpleProps

/*
Why typescript ?
1.Better Intelligence 
2.Highlight dynamic assignment as error 
*/