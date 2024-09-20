import React from 'react';
import './ThemeToggleButton.css';

interface ThemeToggleButtonProps {
    darkMode: boolean;
    toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ darkMode, toggleTheme }) => {
    return (
        <button onClick={toggleTheme} className="theme-toggle-btn">
            {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
    );
};

export default ThemeToggleButton;