import React from 'react';
import "./clock.css";

class Clock extends React.Component{
state = {date: new Date()};
   componentDidMount(){
       this.clockTimer = setInterval(() => {this.tick();}, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }
   tick(){
    this.setState({date: new Date()});
   }


    render(){
        return(
            <div className='watch'>
                <h3>Smart Watch</h3>
               <span> {this.state.date.toLocaleTimeString(this.props.locale)}</span>
            </div>
        )
    }
}
export default Clock;