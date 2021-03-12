import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const guardarDatos = (e) =>{
        e.preventDefault()
        if(!fruta.trim()){    /* El método trim( ) devuelve la cadena de texto despojada de los espacios en blanco en ambos extremos. El método no afecta al valor de la cadena de texto. Mozilla*/
            console.log('Fruta está vacío')
            return
        }

        if(!descripcion.trim()){    
            console.log('descripcion está vacío')
            return
        }

        console.log('procesando datos...' + fruta + descripcion)

        e.target.reset()
        setFruta('')
        setDescripcion('')

    }

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos }>
                <input 
                    type="text"
                    placeholder="Ingrese fruta"
                    className="form-control mb-2"
                    onChange={ e => setFruta(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese Descripción"
                    className="form-control mb-2"
                    onChange={ e => setDescripcion(e.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Formulario
