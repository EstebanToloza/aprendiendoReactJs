import React from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = () => {
    
    const heroesFiltered = heroes;
    
    const [ formValues, handleInputChange ] = useForm({
        searchHeros: ''
    } );
    const { searchHeros } = formValues
    
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchHeros)
    }

    return (
        <div>
            <h1>SearchScreen</h1>
            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Find yout hero" 
                            className="form-control" 
                            name="searchHeros"
                            value={searchHeros}
                            onChange={handleInputChange}
                            autoComplete="off"
                        />
                        <button 
                            className="btn btn-outline-primary btn-block mt-2" 
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
