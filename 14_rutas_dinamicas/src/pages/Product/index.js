import React from 'react';
import { useParams } from 'react-router';

const Product = () => {
    const { id } = useParams();
    return (
        <div>
            El id del producto es: {id}
        </div>
    )
}

export default Product;
