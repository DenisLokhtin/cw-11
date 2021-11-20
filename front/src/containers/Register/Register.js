import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {registerUser} from "../../store/actions/userActions";
import '../Login/Login.css'

const Register = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        username: '',
        password: '',
    });

    const inputChangeHandler = e => {
        const {name, value} = e.target;

        setUser(prevState => ({...prevState, [name]: value}));
    };

    const submitFormHandler = e => {
        e.preventDefault();
        dispatch(registerUser({...user}));
    };

    return (
        <div>
            <form className="authorization">
                <h2>Register</h2>
                <input name="username" value={user.username} onChange={e => (inputChangeHandler(e))} type="text" placeholder="Username"/>
                <input name="password" value={user.username} onChange={e => (inputChangeHandler(e))} type="password" placeholder="Password"/>
                <button onSubmit={submitFormHandler}>Send</button>
            </form>
        </div>
    );
};

export default Register;