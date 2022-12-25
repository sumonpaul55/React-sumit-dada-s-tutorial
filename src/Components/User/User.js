import React from 'react';

const User = ({render}) => {
    return (
        <h2>
           User is {render(true)}
        </h2>
    );
};

export default User;