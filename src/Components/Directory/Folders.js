import React, { Component } from "react";

import tempData from "../../TempData/tempdata.json";
class Folders extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: tempData.data
    };
    this.extractFiles = this.extractFiles.bind(this);
  }
  extractFiles(item) {
    console.log(item);
    if (item.node && item.node.length > 0) {
      console.log("is array");
      this.setState({ data: item.node });
    } else {
      console.log("not array");
    }
  }

  removeFolder(id) {
    this.props.removeFolder(id);
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map((item, index) => (
          <div
            className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6"
            key={index}
          >
            <h4
              className="folderButton"
              onClick={() => {
                this.extractFiles(item);
              }}
            >
              <i className="fa fa-folder  fa-3x" aria-hidden="true" />
              {item.name}
            </h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Folders;
