import React, { Component } from 'react';
import MouseOver from './MouseOver';

class Content extends Component {
    render() {
        const {theme} = this.props;
       
        return (
           
            <div>
                 <h2>content component</h2>
                 <MouseOver theme={theme}/>
            </div>
           
        );
    }
}

export default Content;