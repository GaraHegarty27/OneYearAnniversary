import React, { useState } from 'react';
import '../Css/App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import HomePage from './HomePage';
import LoveLetter from "./LoveLetter";
import Facts from "./Facts";
import Photos from "./Photos";
import MilestonesBucketlist from "./MilestonesBucketlist";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const correctPassword = "Punjab16Donegal27";

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setErrorMessage(""); // Clear previous error
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <h1>Please enter the password to access the app</h1>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter password"
        />
        <button onClick={handleLogin}>Submit</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<HomePage />} />
            <Route path="loveletter" element={<LoveLetter />} />
            <Route path="facts" element={<Facts />} />
            <Route path="photos" element={<Photos />} />
            <Route path="milestonesbucketlist" element={<MilestonesBucketlist />} />
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
