import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function GridComplexExample() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegistration = event => {
        console.log(email, password)
        event.preventDefault()
    }
    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePasswordChang = event => {
        setPassword(event.target.value)
    }

    return (
        <Form onSubmit={handleRegistration}>
            <h3 className="text-primary">Please register</h3>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChang} type="password" placeholder="Password" />
                </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default GridComplexExample;