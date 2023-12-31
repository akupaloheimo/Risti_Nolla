import React, {useState} from 'react'
import Axios from "axios";
import Cookies from "universal-cookie"

function Login() {
    const cookies = new Cookies();
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const login =() => {
      Axios.post("http://localhost:3001/login", {
        username,
        password,
      }).then((res) => {
        const {firstName, lastName, username, token, userId} = res.data;
        cookies.set("token", token);
        cookies.set("userId", userId);
        cookies.set("username", username);
        cookies.set("lastName", lastName);
        cookies.set("firstName", firstName);
        setIsAuth(true)
      });
    };
  return (
    <div classname="login">
        <label> Login</label>
        <input placeholder='Username' onChange={(event) => {
            setUsername(event.target.value);
        }}/>
        <input placeholder='Password' onChange={(event) => {
            setPassword(event.target.value);
        }}/>
        <button onClick={login}> Login</button>
    </div>
  )
}

export default Login