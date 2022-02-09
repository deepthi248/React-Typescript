
type propsTypes = {

    names: {
        firstName: string
        lastName: string
    }[]

}

function UsingObjectsAndArrayOfObjects(props: propsTypes) {
    return (
        <div>

            {
                props.names.map(name => {

                    return (<h1 >{name.firstName} {name.lastName}</h1>)
                })
            }
        </div>
    )
}

export default UsingObjectsAndArrayOfObjects