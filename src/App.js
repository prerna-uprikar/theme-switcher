import './App.scss';
import Header from './components/header/Header';
import React, { useState, useEffect } from "react";
import MainContent from './components/mainContent/Content';

function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <>
      <div className={`App ${theme}-theme`}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <MainContent />
      </div>
    </>
  );
}

export default App;
