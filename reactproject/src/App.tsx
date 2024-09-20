import './App.css'
import ChampionList from './ChampionList';
import './championGrid.css';
import React, { useState } from 'react';
import ThemeToggleButton from './ThemeToggleButton';

const App: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className={`app-container ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <ThemeToggleButton darkMode={darkMode} toggleTheme={toggleTheme} />
            <h1 className="header">League of Legends Champions</h1>
            <ChampionList />
        </div>
    );
};

export default App;
