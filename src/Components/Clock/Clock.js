import React from 'react';
import "./clock.css";

class Clock extends React.Component{
    render(){
        return(
            <div className='watch'>
                <h3>Smart Watch</h3>
               <span> {new Date().toLocaleTimeString(this.props.locale)}</span>
            </div>
        )
    }
}
export default Clock;