import React from "react";
export default class Emoji extends React.Component {
    addEmoji=(emoji, text)=>`${emoji} ${text} ${emoji}`;

    render() {
    const text = "This is Emoji text";
        return(
            <div>{text}</div>
        )
    }
}












