import React from 'react'
import { Styles } from './Styles.js';
import { Form, Formik, useField } from 'formik';
import * as Yup from 'yup';

const CustomTextInput = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return(
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomCheckbox = ({ children, ...props}) => {
  const [field, meta] = useField(props, 'checkbox');

  return(
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const CustomSelect = ({ label, ...props}) => {
  const [field, meta] = useField(props);

  return(
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

function App() {
  return (
    <Styles> 
      <Formik
        initialValues={{
          name: '',
          email: '',
          acceptedTerms: false,
          specialPower: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Más de 3 caracteres')
            .max(13, 'Menos de 15 caracteres')
            .required('Requerido'),
          email: Yup.string()
            .email('dirección invalida')
            .required('Requerido'),
          acceptedTerms: Yup.boolean()
            .required('Requerido')
            .oneOf([true], 'Debe aceptar términos y condiciones para avanzar'),
          specialPower: Yup.string()
            .oneOf(['Volar', 'Invisibilidad', 'Comprender web de Afip', 'Otro'], 'Superpoder inexistente')
            .required('Requerido'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) =>{
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 3000)
      }}
      >  
        {props => (
          <Form>
            <h1>Ingresar</h1>
            <CustomTextInput label="Name" name="name" type="text" placeholder="Esteban" />
            <CustomTextInput label="Email" name="email" type="text" placeholder="esteban@email.com" />
            <CustomSelect label="Superpoder" name="specialPower">
              <option value="">Seleccione su superpoder</option>
              <option value="Volar">Volar</option>
              <option value="Invisibilidad">Invisibilidad</option>
              <option value="Comprender web de Afip">Comprender web de Afip</option>
              <option value="Otro">Otro</option>
            </CustomSelect>
            <CustomCheckbox name="acceptedTerms">
              Acepto términos y condiciones
            </CustomCheckbox>
            <button type="submit"> {props.isSubmitting ? 'Aguarde un instante...' : 'Enviar'} </button>
          </Form>
        )}
      </Formik>
    </Styles>
  );
}

export default App;
