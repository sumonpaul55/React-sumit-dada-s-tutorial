import React from "react";

export default class Emoji extends React.Component {

    addEmoji=(text,emoji)=>`${emoji} ${text} ${emoji}`;
   
    render(overwrite) {
        return this.props.children({addEmoji: this.addEmoji})
    }
}












