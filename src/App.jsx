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

    // Step 6: handleAddFighter()
    const handleAddFighter = (newFighter) => {
        console.log(newFighter);

        // if you have enough money, add a new fighter to your team
        if (money >= newFighter.price) {
            setTeam([...team, newFighter]);
            // filter through zombieFighters and check to see if the selected fighter has a unique id. if it does, add it to updatedZombieFighters. if the id is not unique (meaning it's already been chosen), do not include that fighter in updatedZombieFighters
            // updatedZombieFighters should not include selected fighter, so filter creates a new array without it
            const updatedZombieFighters = zombieFighters.filter(fighter => fighter.id !== newFighter.id);
            // call the setter function and update it to updatedZombieFighters
            setZombieFighters(updatedZombieFighters);
            // call the setter function and update it to be the total money minus the cost of the selected fighter
            setMoney(money - newFighter.price);
        } else {
            console.log('You don\'t have enough money.')
        };

        console.log(team);
    };

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
                    {/* Step 6: create a function called handleAddFighter()
                    Accept a fighter object as an argument
                    handleAddFighter() should be triggered when you click the Add button */}
                    <button onClick={() => handleAddFighter(fighter)}>Add</button>
                </li>
            </ul>
        </>
    );

    return (
        <>

            <h1>Zombie Fighters</h1>
            {/* Step 5: display current value of money */}
            <h3>Money: {money}</h3>
            <h3>Fighters:</h3>
            <ul>
                {zombieFightersList}
            </ul>

        </>
    );
}

export default App;
