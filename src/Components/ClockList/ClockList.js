import React from 'react';
import Clock from '../Clock/Clock';
import './Clocklist.css';
const ClockList = ({quantity = []}) => {
    
    return (
        <div className='border'>
            {quantity.map((key,index) => <Clock key={Math.random()}/>)} 
            {/* we shouldn't use index as a key. we should use an making key through Math.random(); if we don't have */}
        </div>
    );
};

export default ClockList;