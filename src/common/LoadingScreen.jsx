import React from "react";

const LoadingScreen = ({ fadeOut }) => (
  <div className={`loading-overlay${fadeOut ? " fade-out" : ""}`}>
    <img src="/img/logo.svg" alt="Logo" className="loading-logo" />
    <h2 className="loading-text">Construyendo tus ideas</h2>
  </div>
);

export default LoadingScreen;