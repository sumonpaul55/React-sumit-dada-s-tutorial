import React, { Component } from 'react';

class Content extends Component {
    render() {
        const {theme}=this.props;
        return (   
            <div style={{border: '1px solid'}}>
               {(theme === 'dark')?<h2>content component</h2>: <h2>Sumon paul</h2>}
            </div>
           
        );
    }
}

export default Content;