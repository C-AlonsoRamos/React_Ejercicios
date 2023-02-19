import './Login.css';

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../../context/userContext';

const Login = () => {
  const { login } = useUser();
  const inputRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();

  return (
    <main>
      <div className="container">
        <div className="box">
          <div className="form">
            <h2>LOGIN</h2>
            <div className="inputBox">
              <input type="text" ref={inputRef} required="required" />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" ref={passRef} required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <button
              onClick={() => {
                if (inputRef.current.value !== '' && passRef.current.value !== '') {
                  login(inputRef.current.value);
                  navigate('/');
                } else {
                  return alert('Introduce Usuario y Contraseña por favor !!');
                }
              }}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
