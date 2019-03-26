import React, { Component } from "react";

import tempData from "../../TempData/tempdata.json";
class Folders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      render: "",
      parent: null,
      children: tempData.data
    };
  }
  handleClick(compName, e) {
    console.log(compName);
    this.setState({ render: compName });
  }
  _renderSubComp() {
    // eslint-disable-next-line default-case
    switch (this.state.render) {
      case this.props.item.name:
        return <Folder />;
    }
  }
  removeFolder(id) {
    this.props.removeFolder(id);
  }

  render() {
    return (
      <div className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6">
        <i
          className="fa fa-folder  fa-3x"
          aria-hidden="true"
          onClick={this.handleClick.bind(this, this.props.item.name)}
        />
        <a
          href="/folder"
          onClick={this.handleClick.bind(this, this.props.item.name)}
          className="foldername"
        >
          {this.props.item.name}
        </a>
        {this._renderSubComp()}
      </div>
    );
  }
}
class Folder extends Component {
  render() {
    return <div>hi this is folder</div>;
  }
}
export default Folders;
