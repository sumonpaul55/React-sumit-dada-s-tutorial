import { useEffect, useState } from 'react';

const useWindwoResize = (screensize) => {
    const [onsmallscreen, setonsmallscreen] = useState(false);

   const checkscreanSize = ()=>{
        setonsmallscreen(window.innerWidth < screensize);
    }

    useEffect(()=>{
        checkscreanSize();
        window.addEventListener('resize', checkscreanSize);

        return () => window.removeEventListener('resize', checkscreanSize);
    },[checkscreanSize])
    return onsmallscreen;
};

export default useWindwoResize;