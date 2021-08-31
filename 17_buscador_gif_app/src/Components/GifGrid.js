import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs(category);

    // console.log(loading)
    // console.log(images)

    return (
        <>
            <h3>{category}</h3>

            {loading && 'Buscando gifs...'}

            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid
