import React from 'react'

const GifGridItem = ({id, img, title}) => {

    console.log({id, img, title})
    return (
        <div className="card">
            <img src={img} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

export default GifGridItem
