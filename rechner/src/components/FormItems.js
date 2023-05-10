import { Form } from "react-bootstrap";


export const FormItems = ({ item, onChange }) => {

    switch (item.type) {
        case 'text':
            return (
                <>
                    <Form.Label>{item.label}</Form.Label>
                    <Form.Control
                        type="text"
                        id={item.label}
                        onChange={(e) => onChange(e.target.value, item.value)}
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
        case 'information':
            return (
                <p>
                    {item.label}
                </p>
            )
        case 'select':
            return (
                <div className="mt-2">
                    <Form.Select aria-label={item.label} onChange={(e) => onChange(e.target.value, item.value)}>
                        <option>{item.label}</option>
                        {
                            item.options.map((opt, index) => {
                                return (
                                    <option value={opt}>{opt}</option>
                                )
                            })
                        }
                    </Form.Select>
                </div>
            )
            break;
    }
}