import React from "react";

export default class Form extends React.Component {
  state = {
    title: "Javascript",
    textareatext: "textarea text is changeing",
    library: "Ract",
    checkedbox: false,
  };

  handlechange = (event) => {
    // this.setState({
    //   [event.target.name]: event.target.value,
    // }) if we want to control the simial input type

    if (event.target.type === "text") {
      this.setState({
        title: event.target.value,
      });
    } else if (event.target.type === "textarea") {
      this.setState({ textareatext: event.target.value });
    } else if (event.target.type === "select-one") {
      this.setState({ library: event.target.value });
    } else if (event.target.type === "checkbox") {
      this.setState({ checkedbox: event.target.checked });
    } else {
      console.log("nothing here");
    }
  };
  submitHandler=(event)=>{
    const { library, textareatext , title, checkedbox} = this.state;
    event.preventDefault();
    console.log( title, textareatext ,library,  checkedbox)
  }


  render() {
    const { title, textareatext, library, checkedbox } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input name="title" type="text" value={title} onChange={this.handlechange} />
          <br />
          <br />
          <textarea name="textareatext" value={textareatext} onChange={this.handlechange}></textarea>
          {/* we shouldn't use inside the textarea in react ..... we should use value as type text*/}
          <div>
            <select value={library} onChange={this.handlechange}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue js">Vue js</option>
            </select>
            <br />
            <input type="checkbox" checked={checkedbox} onChange={this.handlechange} name="" id="" />
            <br />
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
}
