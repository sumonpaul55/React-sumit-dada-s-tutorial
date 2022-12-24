import React from 'react';
import Withcounter from '../HOS/Withcounter';
 const ClickCounter = (props) => {
    const {count , inCreaseTime} = props;

    return (
        <div>
            <h3>Click counter working through withcounter which received original component</h3>
            
            <button type="button" onClick={inCreaseTime}>Clicked {(count>0)? count: 'X'}  times</button>
        </div>
    )
};
export default Withcounter(ClickCounter);