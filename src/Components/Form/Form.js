import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebaseAuthentication from '../../firebase/initializeApp';
firebaseAuthentication();

function GridComplexExample() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);


    const handleRegistration = event => {
        event.preventDefault()
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case')
            return;
        }

        isLogin ? loginUser(email, password) : createNewUser(email, password)
    }
    const auth = getAuth();
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user
                setError('')
                console.log(user)
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
            })
            .catch((error) => {
                setError(error.message)
            });
    }

    const handleEmailChange = event => {
        setEmail(event.target.value)
    };
    const handlePasswordChang = event => {
        setPassword(event.target.value)
    }
    const toggle = event => {
        setIsLogin(event.target.checked);
    }

    return (
        <Form onSubmit={handleRegistration}>
            <h3 className="text-primary">{isLogin ? "Please Login" : "Please register"}</h3>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordChang} type="password" placeholder="Password" required />
                    <input onChange={toggle} type="checkbox" className="form-check-input" id="grideCheck1"></input>
                    <label className="form-check-label" htmlFor="grideCheck1">
                        {isLogin ? "Please Login" : "Already Register?"}
                    </label>
                </Form.Group>

            </Row>
            <h6 className="text-danger">{error}</h6>
            <Button variant="primary" type="submit">
                {isLogin ? "Login" : "Register"}
            </Button>
        </Form>
    );
}

export default GridComplexExample;