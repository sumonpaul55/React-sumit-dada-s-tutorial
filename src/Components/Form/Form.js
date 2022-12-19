import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Javascript",
    textareatext: "textarea text is changeing",
  };

  handlechange = (event) => {
    if (event.target.type === "text") {
      this.setState({ title: event.target.value });
    } else if (event.target.type === "textarea") {
      this.setState({ textareatext: event.target.value });
    }else{
        console.log('nothing here')
    }
  };
  render() {
    const { title,textareatext} = this.state;
    return (
      <div>
        <input type="text" value={title} onChange={this.handlechange} />
        <br />
        <br />
        <textarea name="textarea" value={textareatext} onChange={this.handlechange}></textarea>
        {/* we shouldn't use inside the textarea in react ..... we should use value as type text*/}
      </div>
    );
  }
}
