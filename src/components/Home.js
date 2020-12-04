import React from 'react';
import RedOnion from './Produce/RedOnion';
import Apple from './Produce/Apple';
import SweetMango from './Produce/SweetMango';
import Pineapple from './Produce/Pineapple';
import { Link } from 'react-router-dom';

// console.log(Data);
const Home = () => {
    return (
        <>
            <h2>Items to purchase</h2>
            <RedOnion />
            <Apple />
            <SweetMango />
            <Pineapple />
            <Link to='/cart'>Cart</Link>
        </>
    )
}

export default Home;