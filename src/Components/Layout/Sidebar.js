import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div>
        <div class="se-pre-con" />
        <div class="wrapper">
          <nav id="sidebar">
            <div class="sidebar-header">
              <h1>
                <a href="index.html">Modernize</a>
              </h1>
              <span>M</span>
            </div>
            <div class="profile-bg" />
            <ul class="list-unstyled components">
              <li class="active">
                <a href="index.html">
                  <i class="fas fa-th-large" />
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i class="fas fa-laptop" />
                  Components
                  <i class="fas fa-angle-down fa-pull-right" />
                </a>
                <ul class="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="carousels.html">Carousels</a>
                  </li>
                  <li>
                    <a href="forms.html">Forms</a>
                  </li>
                  <li>
                    <a href="modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="tables.html">Tables</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="charts.html">
                  <i class="fas fa-chart-pie" />
                  Charts
                </a>
              </li>
              <li>
                <a href="grids.html">
                  <i class="fas fa-th" />
                  Grid Layouts
                </a>
              </li>
              <li>
                <a
                  href="#pageSubmenu1"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i class="far fa-file" />
                  Pages
                  <i class="fas fa-angle-down fa-pull-right" />
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu1">
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="500.html">500</a>
                  </li>
                  <li>
                    <a href="blank.html">Blank</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="mailbox.html">
                  <i class="far fa-envelope" />
                  Mailbox
                  <span class="badge badge-secondary float-md-right bg-danger">
                    5 New
                  </span>
                </a>
              </li>
              <li>
                <a href="widgets.html">
                  <i class="far fa-window-restore" />
                  Widgets
                </a>
              </li>
              <li>
                <a href="pricing.html">
                  <i class="fas fa-table" />
                  Pricing Tables
                </a>
              </li>
              <li>
                <a
                  href="#pageSubmenu3"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i class="fas fa-users" />
                  User
                  <i class="fas fa-angle-down fa-pull-right" />
                </a>
                <ul class="collapse list-unstyled" id="pageSubmenu3">
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="register.html">Register</a>
                  </li>
                  <li>
                    <a href="forgot.html">Forgot password</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="maps.html">
                  <i class="far fa-map" />
                  Maps
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
