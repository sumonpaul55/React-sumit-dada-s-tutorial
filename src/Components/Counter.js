import React from "react";

class Counter extends React.Component {
    state = {
        count: 0,
       }
    //    inCreaseTime = ()=>{
    //     this.setState((prevState) => ({
    //         count: prevState.count + 1,
    //     }))
    //    }
    inCreaseTime =()=>{
        this.setState(
            (prevvalue) => ({count: prevvalue.count + 1,})
        );
        }
    render() { 
        const {render} = this.props;
        const {count} = this.state;
        return render(count, this.inCreaseTime); // we can use any name without render cause it's render porps

    }
}

export default Counter;