import { useEffect, useState } from 'react';

const useWindwoResize = (screensize) => {
    const [onsmallscreen, setonsmallscreen] = useState(false);

   

    useEffect(()=>{
        const checkscreanSize = ()=>{
            setonsmallscreen(window.innerWidth < screensize);
        }
        checkscreanSize();
        window.addEventListener('resize', checkscreanSize);
        return () => window.removeEventListener('resize', checkscreanSize);
    },[screensize])
    return onsmallscreen;
};

export default useWindwoResize;