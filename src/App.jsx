// src/App.jsx

import './App.css';
import { useState } from 'react';

const App = () => {
    // Step 1: create state variable named team and set initial state to empty array []
    const [team, setTeam] = useState([]);

    // Step 2: create state variable named money and set initial state to 100
    const [money, setMoney] = useState(100);

    // Step 3: create state variable named zombieFighters and set initial state to a given array of objects
    const [zombieFighters, setZombieFighters] = useState([
        {
            id: 1,
            name: 'Survivor',
            price: 12,
            strength: 6,
            agility: 4,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
        },
        {
            id: 2,
            name: 'Scavenger',
            price: 10,
            strength: 5,
            agility: 5,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
        },
        {
            id: 3,
            name: 'Shadow',
            price: 18,
            strength: 7,
            agility: 8,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
        },
        {
            id: 4,
            name: 'Tracker',
            price: 14,
            strength: 7,
            agility: 6,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
        },
        {
            id: 5,
            name: 'Sharpshooter',
            price: 20,
            strength: 6,
            agility: 8,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
        },
        {
            id: 6,
            name: 'Medic',
            price: 15,
            strength: 5,
            agility: 7,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
        },
        {
            id: 7,
            name: 'Engineer',
            price: 16,
            strength: 6,
            agility: 5,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
        },
        {
            id: 8,
            name: 'Brawler',
            price: 11,
            strength: 8,
            agility: 3,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
        },
        {
            id: 9,
            name: 'Infiltrator',
            price: 17,
            strength: 5,
            agility: 9,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
        },
        {
            id: 10,
            name: 'Leader',
            price: 22,
            strength: 7,
            agility: 6,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
        },
    ]);

    // Step 4: display the list of zombieFighters by mapping the array into the UI of App.jsx
    // each character should have image, name, price, strength, agility
    // each character should have an add button to add them to your team
    const zombieFightersList = zombieFighters.map((fighter, id) =>
        <>
            <ul>
                <li key={id}>
                    <img src={fighter.img} alt="Placeholder image of a zombieFighter" />
                    <br />
                    <b>{fighter.name}</b>
                    <br />
                    Price: {fighter.price}
                    <br />
                    Strength: {fighter.strength}
                    <br />
                    Agility: {fighter.agility}
                    <br />
                    {/* not a functioning button yet */}
                    <button>Add</button>
                </li>
            </ul>
        </>
    );


    return (
        <>

            <h1>Zombie Fighters</h1>
            <ul>
                {zombieFightersList}
            </ul>

        </>
    );
}

export default App;
