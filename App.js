import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Weather from "./Pages/Weather";
import Settings from "./Pages/Settings";

// Local storage craps out periodically?

function App() {
  const [userList, setUserList] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState([]);

  useEffect(() => {
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
              <Login userList={userList} setUserLoggedIn={setUserLoggedIn} />
            }
          />
          <Route path="/register" element={<Register addUser={addUser} />} />
          <Route
            path="/weather"
            element={<Weather userLoggedIn={userLoggedIn} userList={userList} />}
          />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
