import React, { Component } from 'react';
import { MyContext } from '../../../Home';

class Section extends Component {

    render() {
        return (
            <div style={{backgroundColor: 'lightblue', padding: '5px'}}>
                <h1>section component</h1>
                <MyContext.Consumer>
                    {(value)=> <h1>{value}</h1>}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default Section;