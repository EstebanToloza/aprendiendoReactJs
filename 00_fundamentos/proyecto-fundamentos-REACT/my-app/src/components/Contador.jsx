import React from 'react'

const Contador = () => {

    const [contador, setContador] = React.useState(0)

    const aumentar = () => {
        console.log('click')
        setContador(contador + 1) /* El estado inicial de contador + 1 */
    }

    return (
        <div>
            <h2>Contador</h2>
            <h3>Nuestro número aumentado: { contador } </h3>
            <h4>
                {
                    contador > 2 ? 'Es mayor a 2' : 'Es menor a 2' /* Estructura del operador ternario, """evaluacion ? exito : negativa """ */
                } 
            </h4>
            <button onClick= {() => aumentar()} >Aumentar</button>
        </div>
    )
}

export default Contador
