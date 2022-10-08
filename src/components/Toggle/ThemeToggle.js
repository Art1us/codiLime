import React from "react";
import './ThemeToggle.css'
import Toggle from "react-toggle";

function ThemeToggle({toggleTheme, theme}) {
  return (
    <label className="themeToggle">
      <Toggle defaultChecked={true} icons={false} onChange={toggleTheme} />
      <span>{theme === 'light' ? 'Light' : 'Dark'}</span>
    </label>
  );
}

export default ThemeToggle;
