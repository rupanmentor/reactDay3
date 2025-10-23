import React from 'react';

const CompC = ({arr}) => {
    return (
        <>
            <h1>Component C</h1>
         {
            arr.map((ele,index)=>{
               return(
                <div key={index}>
                    <p>{ele}</p>
                </div>
               )
            })
         }
        </>
    );
};

export default CompC;