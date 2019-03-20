import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default mb-xl-5 mb-4">
          <div class="container-fluid">
            <div class="navbar-header">
              <button
                type="button"
                id="sidebarCollapse"
                class="btn btn-info navbar-btn"
              >
                <i class="fas fa-bars" />
              </button>
            </div>
            <form
              action="#"
              method="post"
              class="form-inline mx-auto search-form"
            >
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                required=""
              />
              <button class="btn btn-style my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
            <ul class="top-icons-agileits-w3layouts float-right">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="far fa-bell" />
                  <span class="badge">4</span>
                </a>
                <div class="dropdown-menu top-grid-scroll drop-1">
                  <h3 class="sub-title-w3-agileits">User notifications</h3>
                  <a href="#" class="dropdown-item mt-3">
                    <div class="notif-img-agileinfo">
                      <img
                        src="images/clone.jpg"
                        class="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                    <div class="notif-content-wthree">
                      <p class="paragraph-agileits-w3layouts py-2">
                        <span class="text-diff">John Doe</span> Curabitur non
                        nulla sit amet nisl tempus convallis quis ac lectus.
                      </p>
                      <h6>4 mins ago</h6>
                    </div>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <div class="notif-img-agileinfo">
                      <img
                        src="images/clone.jpg"
                        class="img-fluid"
                        alt="Responsive image"
                      />
                    </div>
                    <div class="notif-content-wthree">
                      <p class="paragraph-agileits-w3layouts py-2">
                        <span class="text-diff">Diana</span> Curabitur non nulla
                        sit amet nisl tempus convallis quis ac lectus.
                      </p>
                      <h6>6 mins ago</h6>
                    </div>
                  </a>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="#">
                    view all notifications
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown mx-3">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown1"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fas fa-spinner" />
                </a>
                <div class="dropdown-menu top-grid-scroll drop-2">
                  <h3 class="sub-title-w3-agileits">Shortcuts</h3>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="fas fa-chart-pie mr-3" />
                      Sed feugiat
                    </h4>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="fab fa-connectdevelop mr-3" />
                      Aliquam sed
                    </h4>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="fas fa-tasks mr-3" />
                      Lorem ipsum
                    </h4>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="fab fa-superpowers mr-3" />
                      Cras rutrum
                    </h4>
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown2"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="far fa-user" />
                </a>
                <div class="dropdown-menu drop-3">
                  <div class="profile d-flex mr-o">
                    <div class="profile-l align-self-center">
                      <img
                        src="images/profile.jpg"
                        class="img-fluid mb-3"
                        alt="Responsive image"
                      />
                    </div>
                    <div class="profile-r align-self-center">
                      <h3 class="sub-title-w3-agileits">Will Smith</h3>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </div>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="far fa-user mr-3" />
                      My Profile
                    </h4>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="fas fa-link mr-3" />
                      Activity
                    </h4>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="far fa-envelope mr-3" />
                      Messages
                    </h4>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="far fa-question-circle mr-3" />
                      Faq
                    </h4>
                  </a>
                  <a href="#" class="dropdown-item mt-3">
                    <h4>
                      <i class="far fa-thumbs-up mr-3" />
                      Support
                    </h4>
                  </a>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="login.html">
                    Logout
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
