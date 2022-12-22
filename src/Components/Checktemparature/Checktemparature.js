import React from "react";
import './CheckTemparature.css';
import TemparatureInput from "./TemparatureInput";

export default class CheckTemparature extends React.Component {
    state = {
        temparature: '',
        scale: 'c'  
    }
handleChange = (e, scale) => {
    this.setState({
        temparature: e.target.value,
        scale,
        
    });
} 
    render(){   
        const {temparature,scale} = this.state;   
        return <div className="temparatureinputfield">
            <TemparatureInput scale='c'/>
            <TemparatureInput scale='f'/>

        </div>
    }
}