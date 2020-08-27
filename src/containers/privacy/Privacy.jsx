import React from "react"
import { Container } from "./Privacy.styles.jsx"
import Button from "../../components/button/Button"
import Input from "../../components/input/Input.jsx"

const Privacy = () => { 

    const input = [
        {type: "checkbox"}
    ]
return (
    <Container>
        <Input input={input}/>
        <h3>Recieve update about Tray.io product by email</h3>
        <Input input={input}/>
        <h3>Recieve communication by email for other products created by the Tray.io team</h3>
        <Button label="Submit"/>
    </Container>
)

}

export default Privacy; 
