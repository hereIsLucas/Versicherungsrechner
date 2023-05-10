import { Form } from "react-bootstrap";
import { useState } from "react";

export const FormItems = ({ item, onChange, answer }) => {
    const [currentValue, setCurrentValue] = useState(answer || null)
    switch (item.type) {
        case 'text':
            return (
                <>
                    <Form.Label>{item.label}</Form.Label>
                    <Form.Control
                        type="text"
                        id={item.label}
                        onChange={(e) => onChange(e.target.value, item.value)}
                        value={currentValue}
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
                        value={currentValue}

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
                    <Form.Select aria-label={item.label} value={currentValue} onChange={(e) => onChange(e.target.value, item.value)}>
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