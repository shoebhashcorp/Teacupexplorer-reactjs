import React, { Component } from "react";
// import folderData from "../../TempData/tempdata.json";
import FolderInput from "../Directory/FolderInput";
import axios from "axios";

export default class FilesorFolders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderData: [],
      parent: null,
      nextId: 4
    };

    // this.extractFiles = this.extractFiles.bind(this);
    // this.addFolder = this.addFolder.bind(this);
  }

  componentDidMount() {
    this.reloadDir();
  }

  reloadDir = (pathtoexplore = "") => {
    this.setState(
      {
        folderData: []
      },
      () => {
        axios
          .post("/api/dirman/dir", { pathtoexplore })
          .then(res => {
            if (res.status === 200) {
              // console.log(res.data);
              if (!res.data.error) {
                this.setState({
                  folderData: res.data.dirContent
                });
              }
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    );
  };

  // addFolder(folderName) {
  //   let { folderData, nextId } = this.state;
  //   folderData.push({
  //     id: nextId,
  //     name: folderName,
  //     extension: null,
  //     node: []
  //   });

  //   this.setState({
  //     folderData: folderData,
  //     nextId: ++nextId
  //   });
  // }
  addFolder = folderName => {
    if (folderName) {
      axios
        .post("/api/dirman", { pathtocreate: folderName })
        .then(res => {
          if (res.status === 200) {
            // console.log(res.data);
            if (!res.data.error) {
              this.reloadDir();
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  // extractFiles(item) {
  //   let { parent } = this.state;
  //   if (parent && parent.length > 0) {
  //     parent.push(item.name);
  //   } else {
  //     parent = [item.name];
  //   }
  //   console.log("parent", parent);

  //   this.setState({ folderData: item.node, parent });
  // }

  dispBackButton() {
    let { parent } = this.state;

    if (parent && parent.length > 0) {
      // let lastItem = parent[parent.length - 1];
      // console.log("last item====", lastItem);
      return (
        <button
          className="go-back btn btn-secondary"
          onClick={() => {
            // this.clickBack();
            console.log("Need to fix the clickback");
          }}
        >
          Go Back
        </button>
      );
    } else {
      return "";
    }
  }

  // clickBack() {
  //   let originalArray = [...this.folderData];
  //   let parentArr = [...this.state.parent];
  //   let count = 0;
  //   console.log("original array", originalArray);
  //   parentArr.forEach(item => {
  //     let foundItem = null;
  //     originalArray.forEach(arrItem => {
  //       if (arrItem.name === item) {
  //         foundItem = arrItem.node;
  //         return;
  //       }
  //     });
  //     if (parentArr.length - 1 > count) {
  //       originalArray = foundItem;
  //     }
  //     count++;
  //   });
  //   parentArr.pop();
  //   this.setState({ folderData: originalArray, parent: parentArr });
  // }

  displayContainer() {
    let { folderData } = this.state;
    if (folderData) {
      return (
        <div>
          {folderData.map((item, index) => (
            <div
              className="font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6"
              key={index}
            >
              <h4
                className="folderButton"
                onClick={() => {
                  // this.extractFiles(item);
                  console.log("Need to fix this");
                }}
              >
                <i className="fa fa-folder  fa-3x" aria-hidden="true" />
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
      <div>
        <FolderInput folderName="" addFolder={this.addFolder} />
        <div className="folder-name">
          {this.state.parent === null ? "" : this.state.parent.join(" > ")}
        </div>
        <br />
        {this.dispBackButton()}
        <br />
        {this.displayContainer()}
      </div>
    );
  }
}
