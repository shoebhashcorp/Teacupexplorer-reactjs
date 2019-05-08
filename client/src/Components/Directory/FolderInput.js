import React, { Component } from "react";

export class FolderInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.folderName
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  onSubmit() {
    let { value } = this.state;
    // Ensure a todo was actually entered before submitting
    if (value.length > 0) {
      this.props.addFolder(value);
      this.setState({ value: "" });
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
          onClick={() => this.onSubmit()}
        >
          NewFolder
        </button>
      </div>
    );
  }
}

export default FolderInput;
