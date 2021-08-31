import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs'
// import { getGifs } from '../Helpers/getGifs'
// import GifGridItem from './GifGridItem'

const GifGrid = ({ category }) => {

    /* const [images, setImages] = useState([])
    
    useEffect(() => {
        getGifs(category)
            .then(setImages)
    }, [category]) */

    const {data, loading} = useFetchGifs();

    console.log(loading)
    console.log(data)

    return (
        <>
            <h3>{category}</h3>

            {loading ? "Cargando..." : "Data cargada!"}
            {/* <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div> */}
        </>
    )
}

export default GifGrid
