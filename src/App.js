import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textfom from './components/Textfom';


export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar title="TaskUtils" hm="Home" darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Textfom heading="Enter Text" mode={darkMode ? 'dark' : 'light'} />
    </>
  );
}
