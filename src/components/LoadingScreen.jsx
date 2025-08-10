import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ isFadingOut }) => {
  return (
    <div className={`loading-container ${isFadingOut ? "fade-out" : ""}`}>
      <h1 className="loading-title">ctrlA.labs</h1>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingScreen;
