import React, { useEffect, useState } from 'react';
import './effects.css'
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });

    const { name, email } = formState;

    useEffect( () => {
        console.log('hola!')
    }, []);

    useEffect( () => {
        console.log('Cambió formState')
    }, [formState]);

    useEffect( () => {
        console.log('Cambió el email')
    }, [email]);

    const handleInputChange = ({ target }) => {
        // console.log(target.name)
        // console.log(target.value)

        setFormState({
            ...formState,
            [target.name]: target.value,
        });
    }

    return (
        <>
         <h1>useEffect</h1>  
         <hr /> 

         <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Ingrese su nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
            <br />
            <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Ingrese su email"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />
         </div>

         { ( name === "123") && <Message /> }
        </>
    )
}

export default SimpleForm
