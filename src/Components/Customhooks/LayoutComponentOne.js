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
            {(onsmallscreen) ? <h1>You are browsing on small screen</h1>: <h1>You are browsing on Big screen </h1>}
        </div>
    );
};

export default LayoutComponentOne;