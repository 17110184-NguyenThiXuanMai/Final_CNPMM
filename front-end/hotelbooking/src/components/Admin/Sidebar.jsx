import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { BsFillHouseFill, BsLockFill } from "react-icons/bs";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-wrapper" data-simplebar="" data-simplebar-auto-hide="true">
        <div className="brand-logo">
          <a href="/admin">
            <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon" />
            <h5 className="logo-text">Admin Page</h5>
          </a>
        </div>
        <ul className="sidebar-menu do-nicescrol">
          <li className="sidebar-header">MAIN NAVIGATION</li>
          <li>
            <Link to="/admin">
              <i className="zmdi zmdi-view-dashboard"></i> <span> Dashboard </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/roomtypes">
              <BsFillHouseFill /> &nbsp;
              <span> Room Types </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/serviceslist">
              <i className="zmdi zmdi-format-list-bulleted"></i>
              <span> Service </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/policy/type=Policy">
              <i className="zmdi zmdi-format-list-bulleted"></i>
              <span> Policy </span>
            </Link>
          </li>
          <li>
            <Link exact to="/admin/discounts">
              <i className="zmdi zmdi-grid"></i> <span> Discount </span>
            </Link>
          </li>
          <li>
            <Link exact to="/admin/booking">
              <i className="zmdi zmdi-grid"></i> <span> Book List </span>
            </Link>
          </li>
          <li>
            <Link exact to="/admin/photo">
              <i className="zmdi zmdi-grid"></i> <span> Photo Library </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/customers">
              <i className="zmdi zmdi-face"></i>
              <span> Customer </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/userlist">
              <i className="zmdi zmdi-face"></i>
              <span> User List </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/user">
              <span> Profile </span>
            </Link>
          </li>
          <li>
            <Link to="/admin/profile">
              <i className="zmdi zmdi-account-circle"></i> <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
