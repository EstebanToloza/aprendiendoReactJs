import React, { useEffect } from 'react';
import './effects.css';
import useForm from '../../Hooks/useForm';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
       console.log("Cambio email")
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>  
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
                <br />
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <br />
            <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
    )
}

export default FormWithCustomHook
