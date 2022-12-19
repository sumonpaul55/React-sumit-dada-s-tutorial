import React from 'react';

export default class Form extends React.Component {
    state = {
        title: 'Javascript'
    }

    handlechange = (event)=>{
        console.log(event.target.value);
        this.setState({title: event.target.value})
    }
    render() {
        const { title } = this.state;
        return (
            <div>
                <input type="text" value={title} onChange={this.handlechange}/>
            </div>
        );
    }
}