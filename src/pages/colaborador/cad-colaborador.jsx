import { useState } from "react";
import { Card } from "react-bootstrap";

function CadColaborador() {
    const [state, setState] = useState(
        [
        {
            name: 'aaa',
            age: 4
        },
        {
            name: 'bbb',
            age: 5
        },
        {
            name: 'ccc',
            age: 10
        },
        ]
    )
    async function getDataApi() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/",{
            method:'GET'
        }).then((response) => response.json());
        setState(response)
        console.log(response)
    }

    return(
        <>
    {state.map((item) => 
    <Card>
        {item.title}
    </Card> )}
    <button onClick={getDataApi}>AAAAA</button>
        </>
    )
}

export default CadColaborador