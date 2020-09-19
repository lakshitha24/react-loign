import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './loign.scss';
import {userActions} from '../_actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser ,faLock} from '@fortawesome/free-solid-svg-icons'


function LoginPage() {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const {username, password} = inputs;
    const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();
    const location = useLocation();

    // reset login status
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    const validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (valid = false)
        );
        return valid;
    }
    const countErrors = (errors) => {
        let count = 0;
        Object.values(errors).forEach(
            (val) => val.length > 0 && (count = count + 1)
        );
        return count;
    }

    function handleChange(e) {
        const {name, value} = e.target;
        // let errors = this.errors;
        //
        // switch (name) {
        //     case 'username':
        //         errors.username = value.length < 5 ? 'username must be 5 characters long' : '';
        //         break;
        //     case 'password':
        //         errors.password = value.length < 5 ? 'password must be 5 characters long' : '';
        //         break;
        //     default:
        //         break;
        // }
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (username && password) {
            // get return url from location state or default to home page
            const {from} = location.state || {from: {pathname: "/"}};
            dispatch(userActions.login(username, password, from));
        }
    }

    return (
        <div className="login-container">
            <h2>Welcome to Springboard</h2>
            <p>Please log in continue</p>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <FontAwesomeIcon icon={faUser} />
                    <input type="text" name="username" placeholder="username" value={username} onChange={handleChange}
                           className={'form-control' + (submitted && !username ? ' is-invalid' : '')}/>
                    {submitted && !username &&
                    <div className="invalid-feedback">Username is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <FontAwesomeIcon icon={faLock} />
                    <input type="password" name="password" placeholder="password" value={password}
                           onChange={handleChange}
                           className={'form-control' + (submitted && !password ? ' is-invalid' : '')}/>
                    {submitted && !password &&
                    <div className="invalid-feedback">Password is required</div>
                    }
                </div>
                <div className="form-group">
                    <button className="btn btn-primary">
                        {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Login
                    </button>

                </div>
                <div className="form-group">
                    <Link to="/register" className="btn btn-link">Register</Link>
                </div>
            </form>
        </div>
    );
}

export {LoginPage};