import React, { Component } from "react";
import Folders from "../Directory/Folders";
import FolderInput from "../Directory/FolderInput";
export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          id: 1,
          name: "tcup",
          extension: null,
          node: [
            { id: 1, name: "folder1", extension: null },
            { id: 2, name: "file1", extension: ".txt" }
          ]
        },
        {
          id: 2,
          name: "explorer",
          extension: null,
          node: [
            { id: 3, name: "folder2", extension: null },
            { id: 4, name: "file2", extension: ".txt" }
          ]
        },
        {
          id: 3,
          name: "msr",
          extension: null,
          node: [
            { id: 5, name: "folder3", extension: null },
            { id: 6, name: "file3", extension: ".txt" }
          ]
        }
      ],
      nextId: 4
    };
    this.addFolder = this.addFolder.bind(this);
    this.removeFolder = this.removeFolder.bind(this);
  }
  addFolder(folderName) {
    let data = this.state.data.slice();
    data.push({
      id: this.state.nextId,
      name: folderName,
      extension: null,
      node: []
    });
    this.setState({
      data: data,
      nextId: ++this.state.nextId
    });
  }
  removeFolder(id) {
    this.setState({
      data: this.state.data.filter((item, index) => item.id !== id)
    });
  }
  render() {
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
                            {this.state.data.map(item => {
                              return (
                                <Folders
                                  item={item}
                                  key={item.id}
                                  id={item.id}
                                  removeFolder={this.removeFolder}
                                />
                              );
                            })}
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
