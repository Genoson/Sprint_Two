import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Weather from "./Pages/Weather";
import Settings from "./Pages/Settings";

// the main bulk and router of my web app


function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // gets user data from local storage
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (userList === null) {
      setUserList([{ userName: "admin", password: "admin" }]);
    } else {
      setUserList(userList);
    }
    // console.log(userList)
  }, []);

  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);

  const addUser = (user) => {
    // adds a new user to the userList
    setUserList([...userList, user]);
    localStorage.setItem("userList", JSON.stringify(userList));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Login userList={userList} />
            }
          />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route
            path="/weather"
            element={<Weather userList={userList} />}
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
