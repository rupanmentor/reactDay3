import React from 'react';

const FilterReduce = ({shopping}) => {

  const handleSubmit = (e)=>{
    //console.log(e.target.value);
    const cat = e.target.value;
    console.log(cat);
    const filteredProducts = shopping.filter((item)=>item.category===cat)
    console.log(filteredProducts);
    const totalPrice = filteredProducts.reduce((total,ele)=>total+ele.price,0)
    console.log(totalPrice);
    
  }



    return (
        <>
         {
            shopping.map((ele)=>{
                return(
                    <div key={ele.id} className='card'>
                        <p>{ele.name}</p>
                        <p>{ele.price}</p>
                        <p>{ele.category}</p>
                    </div>
                )
            })
         }  
         <button value="Electronics" onClick={(e)=>handleSubmit(e)}>Electronics</button>
         <button value="Grocery" onClick={(e)=>handleSubmit(e)}>Grocery</button> 
        </>
    );
};

export default FilterReduce;