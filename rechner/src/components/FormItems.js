import { Form } from "react-bootstrap";


export const FormItems = ({ item }) => {

    switch (item.type) {
        case 'text':
            return (
                <>
                    <Form.Label>{item.label}</Form.Label>
                    <Form.Control
                        type="text"
                        id={item.label}

                    />
                </>
            )
            break;
        case 'password':
            return (
                <>
                    <Form.Label >{item.label}</Form.Label>
                    <Form.Control
                        type="password"
                        id="inputPassword5"
                    />
                </>
            )
            break;
    }
    return (
        <></>
    )
}