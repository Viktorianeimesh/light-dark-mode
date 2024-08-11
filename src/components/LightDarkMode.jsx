import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';
import '../theme.css';

export const LightDarkMode = () => {

  const [theme, setTheme] = useLocalStorage('theme', "dark");

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p className="mode-text">Welcome to my page</p>
        <button 
          onClick={handleToggleTheme}
          className="mode-button"
        >Change Theme</button>
      </div>
    </div>
  )
}
