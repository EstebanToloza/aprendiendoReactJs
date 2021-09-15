import { useState } from "react"

/* Custom hook. Recibe un objeto con las propiedades a manipular,
el handleInputChange se ocupa de leer y setear los nuevos valores que se le van dando a
dichas propiedades */

const useForm = ( initialState = {} ) => {
   
    const [values, setValues] = useState(initialState)

    const reset = () => {
        setValues(initialState)
    }

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [target.name]: target.value,
        });
    }

    return [ values, handleInputChange, reset ]

}

export default useForm
