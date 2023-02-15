import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/context";
import "./Login.css";

const Login = () => {
  const userRef = useRef();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <main>
      <div className="contenedor">
        <div className="central">
          <div className="login">
            <div className="titulo">Bienvenido</div>
            <form className="loginform">
              <input type="text" placeholder="Usuario" ref={userRef} />
              <button
                onClick={() => {
                  setUser(userRef.current.value);
                  localStorage.getItem("user");
                  navigate("/home");
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Login;
