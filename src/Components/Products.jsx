import React from 'react';



const Products = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt="" />
             <h1>{props.name}</h1>
             <p>{props.desc}</p>
             <p>{props.price}</p>
        </div>
    );
};



export default Products;