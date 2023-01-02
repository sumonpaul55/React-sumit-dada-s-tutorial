import React from 'react';

const Mybutton = ({handleclick, children}) => {
    return (

        <div>
            <button onClick={handleclick}>
                {children}
            </button>
        </div>
    );
};

export default Mybutton;