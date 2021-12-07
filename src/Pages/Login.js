import { useState } from "react";

import { Link } from "react-router-dom";

const Login = ({ userList, setUserLoggedIn }) => {
  const [usernameTry, setUsernameTry] = useState("");
  const [passwordTry, setPasswordTry] = useState("");

  const handleSubmit = (e) => {
    console.log(userList);
    console.log(usernameTry);
    console.log(passwordTry);
    e.preventDefault();
    // currently only 1 user in userlist, but login verifies so that's ok for now
    for (let i = 0; i < userList.length; i++) {
      if (
        usernameTry === userList[i].userName &&
        passwordTry === userList[i].password
      ) {
        alert("Login Successful!");

        let user = i
        setUserLoggedIn(user);
        
        window.location.href = "/weather";
        return;
      }
    }
    alert("Login Failed!");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
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
