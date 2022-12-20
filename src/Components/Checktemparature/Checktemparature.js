import React from "react";
import Calculator from "./Calculator/Calculator";
import './CheckTemparature.css';

export default class CheckTemparature extends React.Component {
    state={
        temparature: ''
    }

    changeTemvalue=(e) => {
        this.setState({
            temparature: e.target.value, 
        })
        
    }

    render(){
        const {temparature} = this.state;
        return <div className="temparatureinputfield">
            <fieldset>
                <legend>Enter Temparature in Selcius</legend>
                <input type="text" value={temparature} onChange={this.changeTemvalue} />
            </fieldset>
            <h4>Result: </h4>
            <Calculator selcius={parseFloat(temparature)}/>
        </div>
    }
}