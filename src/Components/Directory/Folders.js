import React, { Component } from "react";

class Folders extends Component {
  removeFolder(id) {
    this.props.removeFolder(id);
  }

  render() {
    return (
      <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
        <i className="fa fa-folder  fa-3x" aria-hidden="true" />
        <a href="/" className="foldername">
          {this.props.item.name}
        </a>
      </div>
    );
  }
}
export default Folders;
