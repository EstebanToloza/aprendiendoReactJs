import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../selectors/getHeroesByName';

const SearchScreen = ({ history }) => {

    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    
    const [ formValues, handleInputChange ] = useForm({
        searchHeros: q
    } );
    const { searchHeros } = formValues

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    
    const handleSearch = (e) => {
        e.preventDefault()
        //console.log(searchHeros)
        history.push(`?q=${searchHeros}`)
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

                    { (q === "") && 
                        <div className="alert alert-info">
                            Search a hero!
                        </div>
                    }

                    { (q !== "" && heroesFiltered.length === 0 ) && 
                        <div className="alert alert-danger">
                            There is no a hero with {q}!
                        </div>
                    }
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
