import React, { Component } from "react";
import Folders from "../Directory/Folders";

import tempData from "../../TempData/tempdata.json";
export class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: tempData.data
    };

    this.removeFolder = this.removeFolder.bind(this);
  }

  removeFolder(id) {
    this.setState({
      data: this.state.data.filter((item, index) => item.id !== id)
    });
  }

  render() {
    // console.log(this.state.data);
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
