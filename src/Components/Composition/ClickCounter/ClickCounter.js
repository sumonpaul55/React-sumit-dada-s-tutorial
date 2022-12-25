import React from 'react';

export default class ClickClounter extends React.Component{
    state = {
        count: 0,
       }
    //    inCreaseTime = ()=>{
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1,
    //     }))
    //    }
    inCreaseTime =()=>{
        this.setState(
            (prevvalue) => ({count: prevvalue.count + 1,})
        );
        }
        render() {
            const {count} = this.state;
            return (
                <div>
                    <h3>Click counter working through withcounter which received original component</h3>
                    
                    <button type="button" onClick={this.inCreaseTime}>Clicked {(count>0)? count: 'X'}  times</button>
                </div>)
            }
        
}