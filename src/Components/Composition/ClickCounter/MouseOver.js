import React from 'react';
import Withcounter from '../HOS/Withcounter';
 const MouseOver = (props) => {
    const {count , inCreaseTime} = props;

    return (
        <div>
            <h3>MouseOver counter working through withcounter which received original component</h3>
            
            <button type="button" onMouseOver={inCreaseTime}>Hovered {(count>0)? count: 'X'}  times</button>
        </div>
    )
};
export default Withcounter(MouseOver);