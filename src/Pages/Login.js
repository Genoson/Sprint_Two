import { useState } from "react";

import { Link } from "react-router-dom";

const Login = (props) => {
  const [usernameTry, setUsernameTry] = useState("");
  const [passwordTry, setPasswordTry] = useState("");

  const handleSubmit = (e) => {
    // console.log(userList);
    // console.log(usernameTry);
    // console.log(passwordTry);
    e.preventDefault();
    // currently only 1 user in userlist, but login verifies so that's ok for now
    for (let i = 0; i < props.userList.length; i++) {
      if (
        usernameTry === props.userList[i].userName &&
        passwordTry === props.userList[i].password
      ) {
        alert("Login Successful!");

        let currentUser = props.userList[i];
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        // console.log(currentUser.hometown);
        const getWeather = async (currentUser) => {
            let city = currentUser.hometown;
            let response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=3472f9dc0182851bae251704ca18a1fa`
            );
            let data = await response.json()
            let currentWeather = data
            localStorage.setItem('currentWeather', JSON.stringify(currentWeather));
            console.log(currentWeather);
        }
        getWeather(currentUser)
        while (true) {
            if (localStorage.getItem('currentWeather') !== null) {
                window.location.href = "/weather";
                break;
            }
        }
        
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
