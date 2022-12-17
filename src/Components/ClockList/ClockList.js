import React from 'react';
import Clock from '../Clock/Clock';
import './Clocklist.css';
const ClockList = ({quantity = []}) => {
    
    return (
        <div className='border'>
            {quantity.map(() =>  <Clock/>)}
        </div>
    );
};

export default ClockList;