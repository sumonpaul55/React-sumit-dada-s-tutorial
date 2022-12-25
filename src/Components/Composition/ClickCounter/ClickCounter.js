import React from 'react';

export default class ClickClounter extends React.Component{

        render() {
            const {count , inCreaseTime} = this.props;
            return (
                <div>
                    <h3>Click counter working through withcounter which received original component</h3>
                    
                    <button type="button" onClick={inCreaseTime}>Clicked {(count>0)? count: 'X'}  times</button>
                </div>)
            }
        
}