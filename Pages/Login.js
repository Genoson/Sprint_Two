import { useState } from "react";

import { Link } from "react-router-dom";

const Login = (props) => {
  const [usernameTry, setUsernameTry] = useState("");
  const [passwordTry, setPasswordTry] = useState("");

  const handleSubmit = (e) => {
    /**
     * This function handles the submit of the login information form
     *  it will check if the user name and password belong to a user in the userList in local storage
     * if they do it will set the currentUser in local storage to the user logging in 
     * and then redirect the user to the weather feed page
     */
    e.preventDefault();
    
    for (let i = 0; i < props.userList.length; i++) {
      if (
        usernameTry === props.userList[i].userName &&
        passwordTry === props.userList[i].password
      ) {
        alert("Login Successful!");

        let currentUser = props.userList[i];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        window.location.href = "/weather";
        return;
      }   
    }
    alert("Login Failed!");
  };

  return (
    <div id="login">
      <form id="logIn" action="" onSubmit={handleSubmit}>
        <label htmlFor="UserName">User Name</label>
        <input
          type="text"
          id="UserName"
          onChange={(e) => setUsernameTry(e.target.value)}
        />

        <label htmlFor="Password">Password</label>
        <input
          type="password"
          id="Password"
          onChange={(e) => setPasswordTry(e.target.value)}
        />
        <input className="submit" type="submit" value="Log In" />
      </form>
      <div>
        Don't have an account? <Link to="/register">Register Here</Link>
      </div>
    </div>
  );
};

export default Login;
