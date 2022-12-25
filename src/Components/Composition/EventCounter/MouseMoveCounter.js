import React, { Component } from 'react';

class MouseMoveCounter extends Component {
    

    render() {
        const {count, inCreaseTime} = this.props;
        return (
            <div>
                <button onMouseMove={inCreaseTime} type='button'>MouseMoved {(count>0)? count: 'X'} Times</button>
            </div>
        );
    }
}

export default MouseMoveCounter;