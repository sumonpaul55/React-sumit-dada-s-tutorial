import React from 'react';
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
   handleclick(locale){
    //e.preventDefault()//a tag has default behavior that's why used preventDefault function 
   this.setState({locale});
   }

   tick(){
    this.setState({date: new Date()});
   }
    render(){
        const {date, locale} = this.state;
        return(
            <div className='watch'>
                <h3>Smart Watch</h3>
               <span> {date.toLocaleTimeString(locale)}</span>
               {/* <button style={{padding: '5px 10px',display: 'block',margin: '20px auto'}} type='button' onClick={this.handleclick}>Switch lang</button> */}
<br></br>
               <button onClick={()=>this.handleclick("bn-BD")} style={{display: 'inline-block', color: 'black',background: 'cyan',padding:'5px 10px'}}>Click here</button>
            </div>
        )
    }
}
export default Clock;