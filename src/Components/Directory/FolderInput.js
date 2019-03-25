import React, { Component } from "react";

export class FolderInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.folderName };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit(item) {
    // Ensure a todo was actually entered before submitting
    if (item.length > 0) {
      this.props.addFolder(item);
      this.setState({ value: "" });
    }
  }
  keyPress(e, item) {
    if (e.keyCode === 13) {
      console.log(e.target.value);
      if (item.length > 0) {
        this.props.addFolder(item);
        this.setState({ value: "" });
      }
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button
          className="fas fa-plus btn btn-primary"
          onKeyDown={this.keyPress}
          onClick={() => this.onSubmit(this.state.value)}
        >
          NewFolder
        </button>
      </div>
    );
  }
}

export default FolderInput;
