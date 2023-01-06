import React, { useEffect, useState } from 'react';

const LayoutComponentOne = () => {
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
        <div>
             <h1>You are browsing on {(onsmallscreen)? 'small': 'Large'} screen</h1>
        </div>
    );
};

export default LayoutComponentOne;