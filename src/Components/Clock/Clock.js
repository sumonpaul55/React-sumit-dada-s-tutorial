import React from 'react';
import Button from '../Button/Button';
import "./clock.css";

class Clock extends React.Component{
    state = {date: new Date(), locale:'en-US'};
    // constructor(props){
    //     super(props);
    //     this.state = {date: new Date(), locale:'en-US'};
    //     this.handleclick = this.handleclick.bind(this); // we can use arrow functions instead of bind;
    // }
   componentDidMount(){
       this.clockTimer = setInterval(() => {this.tick();}, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.clockTimer)
    }
   handleclick = (locale)=>{
    //e.preventDefault()//a tag has default behavior that's why used preventDefault function 
    this.setState({locale})
   }
   tick(){
    this.setState({date: new Date()});
   }
  
    render(){
        const {date, locale} = this.state;
        let button;
        if(locale==='en-US'){
            button = <Button change={this.handleclick} locale='bn-BD'></Button> 
        }else{
            button = <Button change={this.handleclick} locale='en-US'></Button> }
        return(
            <div className='watch'>
                <h3>Smart Watch</h3>
               <span> {date.toLocaleTimeString(locale)}</span>
               {/* <button style={{padding: '5px 10px',display: 'block',margin: '20px auto'}} type='button' onClick={this.handleclick}>Switch lang</button> */}
<br></br>
              {button}{/*bind always return a new function*/}
            </div>
        )
    }
}
export default Clock;