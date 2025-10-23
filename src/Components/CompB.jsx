import React from 'react';

const CompB = ({obj}) => {
    return (
        <div>
            <h1>Component B</h1>
            <p>{obj.batch}</p>
            <p>{obj.mode}</p>
            <p>{obj.mentor}</p>
        </div>
    );
};

export default CompB;