import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = () => {
    return (
        <div>
            <h2>Compoment A </h2>
            <ComponentB />
        </div>
    );
};

export default ComponentA;