import React from 'react';

export default class MouseOver extends React.Component{

   
        render() {
            const {count, inCreaseTime, theme} = this.props;
            const style = (theme === 'dark') ?  {backgroundColor: '#000', color: 'white' }: {backgroundColor: 'red'};
            console.log(theme)
          
            return (
                <div>
                    <h3>Click counter working through withcounter which received original component</h3>
                    
                    <button type="button" style={style} onMouseOver={inCreaseTime}>Clicked {(count>0)? count: 'X'}  times</button>

                </div>)
            }
        
}