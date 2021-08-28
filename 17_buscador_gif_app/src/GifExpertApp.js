import React, { useState } from 'react'
import AddCategory from './Components/AddCategory';
import GifGrid from './Components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman'])

    /* const handleAdd = () => {
        //setCategories([...categories, 'Spiderman']) //Dos soluciones diferentes, una con operador de propagación y otra con callback
        setCategories(cats => [...cats, 'Spiderman'])
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp
