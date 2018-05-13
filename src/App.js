import React, { Component } from "react";
import marked from "marked";

class App extends Component {
  state = {
    mdText: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  rawMD = () => {
    return { __html: marked(this.state.mdText, { sanitize: true }) };
  };
  render() {
    return (
      <div className="App">
        <div>
          <h3>Write your Markdown here</h3>
          <textarea
            onChange={this.handleChange}
            name="mdText"
            cols="30"
            rows="10"
          />
        </div>
        <div>
          <h3>MD Preview</h3>
          <div dangerouslySetInnerHTML={this.rawMD()} />
        </div>
      </div>
    );
  }
}

export default App;
