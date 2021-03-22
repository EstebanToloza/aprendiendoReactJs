import React from 'react'
import { useParams } from 'react-router'

const Civilization = () => {

    //console.log(useParams())
    const {id} = useParams()
    console.log(id)

    const [pueblo, setpueblo] = React.useState([])

    React.useEffect(() => {
        //console.log('useEffect')
        const obtenerDatos = async () => {
            const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const pueblo = await data.json()
            //console.log(users)
            setpueblo(pueblo)
        }
        obtenerDatos()
    }, [id])


    return (
        <div>
            <h3>{pueblo.name}</h3>
            <p>{pueblo.team_bonus}</p>
        </div>
    )
}

export default Civilization
