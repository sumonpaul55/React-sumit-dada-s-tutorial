import React from 'react';

const Mybutton = ({handleclick, children}) => {
    console.log(children)
    return (

        <div>
            <button onClick={handleclick}>
                {children}
            </button>
        </div>
    );
};

export default React.memo(Mybutton);