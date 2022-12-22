import React from "react";
import { convert, toCelcius, tofahreheit } from "../../lib/Converter";
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
        const celcius = scale === 'c'? convert(temparature, tofahreheit): temparature;
        const Fahrenheit = scale === 'f'? convert(temparature, toCelcius): temparature;
        return <div className="temparatureinputfield">
            <TemparatureInput scale='c' temparature={Fahrenheit} OntemparatureChange={this.handleChange}/>
            <TemparatureInput scale='f'temparature={celcius} OntemparatureChange={this.handleChange}/>
        </div>
    }
}