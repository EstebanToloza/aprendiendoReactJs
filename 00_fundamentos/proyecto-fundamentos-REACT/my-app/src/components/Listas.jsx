import React, {useState}  from 'react'

const Listas = () => {

    const estadoInicial = [1, 2, 3, 4, 5]
    const [lista, setLista] = useState(estadoInicial)

    return (
        <div>
            <h2>Listas</h2>
            {
                lista.map( (item, index) => (
                    <h4 key={index}>{item}</h4>
                ))
            }
        </div>
    )
}

export default Listas
