import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-content">
        <h1>Welcome to Your Productivity App</h1>
        <p>Manage your tasks, log your keys, and stay organized!</p>
        <div className="home-buttons">
          <a href="/todo" className="home-btn">
            Go to To-Do List
          </a>
          <a href="/keylogger" className="home-btn">
            Try Key Logger
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
