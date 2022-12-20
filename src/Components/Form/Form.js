import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Javascript",
    textareatext: "textarea text is changeing",
    library: "Ract",
    checkedbox: false
  };

  handlechange = (event) => {
    if (event.target.type === "text") {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.type === "textarea") {
      this.setState({ textareatext: event.target.value });
    } else if (event.target.type === "select-one") {
      this.setState({ library: event.target.value,
      });
    } else if (event.target.type === "checkbox") {
      this.setState({ checkedbox: event.target.checked,
      });
    }
    else {
      console.log("nothing here");
    }
  };
  render() {
    const { title, textareatext, library, checkedbox } = this.state;
    return (
      <div>
        <input type="text" value={title} onChange={this.handlechange} />
        <br />
        <br />
        <textarea name="textarea" value={textareatext} onChange={this.handlechange}></textarea>
        {/* we shouldn't use inside the textarea in react ..... we should use value as type text*/}
        <div>
          <select value={library} onChange={this.handlechange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue js">Vue js</option>
          </select>
          <br /><br />
          <input type="checkbox" checked={checkedbox} onChange={this.handlechange} name="" id="" />
        </div>

      </div>
    );
  }
}
