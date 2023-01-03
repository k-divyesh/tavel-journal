import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import CardData from './Data';

function App() {
    const cards = CardData.map((item, i) => {
        return <Card key={i} item={item} />;
    });

    return (
        <>
            <NavBar />
            <main className="cardContainer">{cards}</main>
        </>
    );
}

export default App;
