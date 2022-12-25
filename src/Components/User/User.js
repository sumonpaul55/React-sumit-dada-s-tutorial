import React from 'react';

const User = ({name}) => {
    return (
        <h2>
           User is {name()}
        </h2>
    );
};

export default User;