import React, { Component } from "react";
import Folders from "../Directory/Folders";
import FolderInput from "../Directory/FolderInput";
import tempData from "../../TempData/tempdata.json";
export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: null,
      data: tempData.data,

      nextId: 4
    };
    this.addFolder = this.addFolder.bind(this);
    this.removeFolder = this.removeFolder.bind(this);
  }

  addFolder(folderName) {
    let { data, nextId } = this.state;
    data.push({
      id: nextId,
      name: folderName,
      extension: null,
      node: []
    });

    this.setState({
      data: data,
      nextId: ++nextId
    });
  }

  removeFolder(id) {
    this.setState({
      data: this.state.data.filter((item, index) => item.id !== id)
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <div>
          <div className="content-wrap">
            <div className="main">
              <div className="container-fluid">
                <div className="row" />

                <div className="content">
                  <div className="row">
                    <div className="col -md -12" />
                  </div>
                  <FolderInput folderName="" addFolder={this.addFolder} />
                  <hr />
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="content all-icons">
                          <div className="row ">
                            {/* {this.state.data.map(item => {
                              return (
                                <Folders
                                  item={item}
                                  key={item.id}
                                  id={item.id}
                                  removeFolder={this.removeFolder}
                                />
                              );
                            })} */}
                            <Folders />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
