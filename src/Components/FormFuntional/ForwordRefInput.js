import React from 'react';

const ForwordRefInput = ({type, placeholder}, ref) => {
    return (
        <div>
            <input ref={ref} type={type} placeholder={placeholder} />
        </div>
    );
};
const forwardedInput = React.forwardRef(ForwordRefInput)

export default forwardedInput;