import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs()
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Batman&limit=10&api_key=WxoNKH0uI8Z4Pf4jxL6f44TTJ1VMotGU'
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                img: img.images?.downsized_medium.url,
            }
        })

        console.log(gifs)
        setImages(gifs)
    }


    return (
        <>
            <h3>{category}</h3>
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
