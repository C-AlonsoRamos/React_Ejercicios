import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import "./Login.css";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const inputRef = useRef();
  const navigate = useNavigate();

  return (
    <div className="sw-login">
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          setUser(inputRef.current.value);
          localStorage.getItem("user");
          navigate("/Home-Gallery");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
