import React, { useEffect } from 'react';

const Formfunctional = () => {
    const inputRef = React.createRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])
    return (
        <div>
            <h1>this is form functional component</h1>

            <div>
                <input ref={inputRef} type="text" placeholder='Enter something'/>
            </div>
        </div>
    );
};

export default Formfunctional;