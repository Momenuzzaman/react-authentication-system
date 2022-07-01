import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = () => {
    const handleRegistration = event => {
        console.log("submit")
        event.preventDefault()
    }
    return (
        <div>
            <h3>Please Register</h3>
            <form onSubmit={handleRegistration}>
                <label htmlFor='email'>Email : </label>
                <input type="text" name="email" placeholder="enter your email" />
                <br />
                <br />
                <label htmlFor='password'>Password : </label>
                <input type="password" name="password" placeholder="password"></input>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Form;