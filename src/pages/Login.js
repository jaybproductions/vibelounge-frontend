import React, { useEffect, useState, useContext } from "react";
import SelectedContext from "../contexts/SelectedContext";
import axios from "axios";

function Login() {
  const handleLogin = async () => {
    const response = await axios.get("http://localhost:91/login");
    window.location.replace(response.data);
  };
  return (
    <div className="login">
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login with spotify</button>
    </div>
  );
}

export default Login;
