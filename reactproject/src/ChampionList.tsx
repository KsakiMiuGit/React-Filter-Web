import React, { useState } from 'react';
import { champions } from './components/data';
import './championGrid.css';
import './App.css';

const ChampionList: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");
    const [difficultyFilter, setDifficultyFilter] = useState("All");
    const [laneFilter, setLaneFilter] = useState("All");
    const [rangeFilter, setRangeFilter] = useState("All");
    const [resourceFilter, setResourceFilter] = useState("All");
    const [darkMode, setDarkMode] = useState(false);

    const resetFilters = () => {
        setRoleFilter("All");
        setDifficultyFilter("All");
        setLaneFilter("All");
        setRangeFilter("All");
        setResourceFilter("All");
    };

    const filteredChampions = champions.filter(champion => {
        return (
            (champion.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (roleFilter === "All" || champion.role === roleFilter) &&
            (difficultyFilter === "All" || champion.difficulty === difficultyFilter) &&
            (laneFilter === "All" || champion.lane === laneFilter) &&
            (rangeFilter === "All" || champion.range === rangeFilter) &&
            (resourceFilter === "All" || champion.resource === resourceFilter)
        );
    });

    return (
        <div>
            <div className="filters-container">
                <input
                    type="text"
                    placeholder="Search champions"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)}>
                    <option value="All">All Roles</option>
                    <option value="Mage">Mage</option>
                    <option value="Fighter">Fighter</option>
                    <option value="Assassin">Assassin</option>
                    <option value="Battlemage">Battlemage</option>
                    <option value="Marksman">Marksman</option>
                    <option value="Diver">Diver</option>
                    <option value="Enchanter">Enchanter</option>
                    <option value="Vanguard">Vanguard</option>
                </select>

                <select value={difficultyFilter} onChange={(e) => setDifficultyFilter(e.target.value)}>
                    <option value="All">All Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <select value={laneFilter} onChange={(e) => setLaneFilter(e.target.value)}>
                    <option value="All">All Lanes</option>
                    <option value="Top">Top</option>
                    <option value="Jungle">Jungle</option>
                    <option value="Mid">Mid</option>
                    <option value="Bottom">Bottom</option>
                </select>

                <select value={rangeFilter} onChange={(e) => setRangeFilter(e.target.value)}>
                    <option value="All">All Ranges</option>
                    <option value="Melee">Melee</option>
                    <option value="Ranged">Ranged</option>
                </select>

                <select value={resourceFilter} onChange={(e) => setResourceFilter(e.target.value)}>
                    <option value="All">All Resources</option>
                    <option value="Mana">Mana</option>
                    <option value="Energy">Energy</option>
                    <option value="Crimson Rush">Crimson Rush</option>
                    <option value="None">None</option>
                </select>

                <button onClick={resetFilters}>Reset Filters</button>
            </div>

            <div className="champion-grid">
                {filteredChampions.map(champion => (
                    <div key={champion.id} className="champion-card">
                        <img src={champion.image} alt={champion.name} className="champion-image" />
                        <h2>{champion.name}</h2>
                        <p>Role: {champion.role}</p>
                        <p>Difficulty: {champion.difficulty}</p>
                        <p>Lane: {champion.lane}</p>
                        <p>Range: {champion.range}</p>
                        <p>Resource: {champion.resource}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChampionList;
