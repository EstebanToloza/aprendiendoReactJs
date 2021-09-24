import React from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../selectors/getHeroesById';
//import foto from '../../../public/assets/heroes/'

const HeroScreen = ({history}) => {

    const {heroeId} = useParams();
    const hero = getHeroesById(heroeId);

    if (!hero) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if(history.length <=2) {
            history.push('/');
        } else {
            history.goBack()
        }
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-4"> 
                <img src={`/assets/heroes/${heroeId}.jpg`} className="img-thumbnail" alt="hero" />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-groupt-item">Alter ego: {alter_ego}</li>
                    <li className="list-groupt-item">Publisher: {publisher}</li>
                    <li className="list-groupt-item">First appearence: {first_appearance}</li>
                    <li className="list-groupt-item">Characters: {characters}</li>
                </ul>
                <br />
                <button className="btn btn-outline-info" onClick={handleReturn}>
                    Return
                </button>
            </div>
        </div>
    )
}

export default HeroScreen
