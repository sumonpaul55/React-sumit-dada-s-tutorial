import React, { Component } from 'react';
import Content from './Content';

class Section extends Component {
    state = ({theme: 'dark'}

)
    render() {
        const theme = this.state;
        return (
            <div>
                <h1>section component</h1>
                <Content theme={theme}/>
            </div>
        );
    }
}

export default Section;