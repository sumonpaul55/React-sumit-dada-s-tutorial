import { useCallback, useEffect, useState } from 'react';

const useWindwoResize = (screensize) => {
    const [onsmallscreen, setonsmallscreen] = useState(false);

    const checkscreanSize = useCallback(()=>{
        setonsmallscreen(window.innerWidth < screensize);
    },[screensize])

    useEffect(()=>{
        checkscreanSize();
        window.addEventListener('resize', checkscreanSize);
        return () => window.removeEventListener('resize', checkscreanSize);
    },[checkscreanSize])
    return onsmallscreen;
};

export default useWindwoResize;