import React from "react";
import './CheckTemparature.css';

const scaleName ={
    c: 'Celcius',
    f: 'Fahrenheit'
}
export default function TemparatureInput({temparature, scale, OntemparatureChange}){
        return (
            <fieldset>
                <legend>Enter Temparature in {scaleName[scale]}</legend>
                <input type="text" value={temparature} onChange={(e)=>OntemparatureChange(e,scale)} />
        </fieldset>
        )
}