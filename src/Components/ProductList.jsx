import React from 'react';

const ProductList = ({arrObj}) => {
    return (
      <>
        {arrObj.map((ele,index)=>{
            return(
                <div key={index} className='card'>
                    <img src={ele.image} alt="" />
                    <h1>{ele.name}</h1>
                    <p>{ele.desc}</p>
                    <p>{ele.price}</p>
                </div>
            )
        })}
     </>
          
    );
};

export default ProductList;