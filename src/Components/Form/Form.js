import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseAuthentication from '../../firebase/initializeApp';
firebaseAuthentication();

function GridComplexExample() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleRegistration = event => {
        event.preventDefault()
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long')
            return;
        }
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                console.log(user)
            })
        console.log(email, password)
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
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChang} type="password" placeholder="Password" required />
                </Form.Group>
            </Row>
            <h6 className="text-danger">{error}</h6>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}

export default GridComplexExample;