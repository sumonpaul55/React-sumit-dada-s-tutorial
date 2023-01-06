import React, { useEffect, useState } from 'react';

const useWindwoResize = () => {
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
    return onsmallscreen;
};

export default useWindwoResize;