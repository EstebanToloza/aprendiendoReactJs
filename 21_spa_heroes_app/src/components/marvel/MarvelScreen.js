import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {

    const publisher = "Marvel Comics"
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            <HeroList publisher={publisher}/>
        </div>
    )
}

export default MarvelScreen
