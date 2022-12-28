import React from 'react';

export default class MouseOver extends React.Component{
    state = ({theme:'dark',})
   
        render() {
            const {count, inCreaseTime} = this.props;
          
            return (
                <div>
                    <h3>Click counter working through withcounter which received original component</h3>
                    
                    <button type="button" onMouseOver={inCreaseTime}>Clicked {(count>0)? count: 'X'}  times</button>
                  
                </div>)
            }
        
}