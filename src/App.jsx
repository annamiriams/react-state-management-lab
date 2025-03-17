// src/App.jsx

import './App.css';
import { useState } from 'react';

const App = () => {
    // Step 1: create state variable named team and set initial state to empty array []
    const [team, setTeam] = useState([]);

    // Step 2: create state variable named money and set initial state to 100
    const [money, setMoney] = useState(100);

    return (
        <>

            <h1>Hello world!</h1>
        
        </>
    );
}

export default App;
