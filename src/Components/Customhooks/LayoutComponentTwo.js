import React, { useEffect, useState } from 'react';

const LayoutComponentTwo = () => {
    const [onsmallscreen, setonsmallscreen] = useState(false);

   const checkscreanSize = ()=>{
        setonsmallscreen(window.innerWidth < 768)   ;
    }

    useEffect(()=>{
        checkscreanSize();
        window.addEventListener('resize', checkscreanSize);

        // eslint-disable-next-line no-restricted-globals
        return () => removeEventListener('resize', checkscreanSize);
    })
    return (
        <div className={(onsmallscreen)? 'small': 'Large'}>
             <h1>Class changing dynamically</h1>
        </div>
    );
};

export default LayoutComponentTwo;