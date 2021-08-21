import React from 'react'
import Parrafo from '../Parrafo'
import Title from '../Title'

const Blog = ({ title, content }) => { //se desestructura el objeto props
    //const { title, content } = props //en caso de recibir props como parámetro, se puede desestructurar acá
    console.log(title, content)
    return (
        <> 
            <Title title={title}/>
            <Parrafo content={content}/>
        </>
    )
}

export default Blog
