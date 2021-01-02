import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AuthService from "../../services/Login/auth.service";
import { BsFillHouseFill, BsLockFill } from "react-icons/bs";

export default class AdminHeader extends Component {
  state = {
    isOpen: false
  }
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;
    return (
      <header className="topbar-nav">
        <nav className="navbar navbar-expand fixed-top">
          <ul className="navbar-nav mr-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link toggle-menu" href="javascript:void();">
                <i className="icon-menu menu-icon"></i>
              </a>
            </li>
            <li className="nav-item">
              <form className="search-bar">
                <input type="text" className="form-control" placeholder="Enter keywords" />
                <a href="javascript:void();"><i className="icon-magnifier"></i></a>
              </form>
            </li>
          </ul>

          <ul className="navbar-nav align-items-center right-nav-link">
            <li className="nav-item dropdown-lg">
              <Link className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" to="/">
                <BsFillHouseFill /></Link>
            </li>
            <li className="nav-item dropdown-lg">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret waves-effect" data-toggle="dropdown" href="javascript:void();">
                <i className="fa fa-bell-o"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" data-toggle="dropdown" href="#">
                <span className="user-profile"><img src="https://via.placeholder.com/110x110" className="img-circle" alt="user avatar" /></span>
              </a>
              {currentUser ? (
                <ul className={this.state.isOpen ? "dropdown-menu dropdown-menu-right" : "dropdown-menu dropdown-menu-right"}>
                  <li className="dropdown-item user-details">
                    <a href="javaScript:void();">
                      <div className="media">
                        <div className="avatar"><img className="align-self-start mr-3" src="https://via.placeholder.com/110x110" alt="user avatar" /></div>
                        <div className="media-body">
                          <h6 className="mt-2 user-title">
                            <Link to={"/profile"}>
                              {currentUser.username}
                            </Link></h6>
                          <p className="user-subtitle">{currentUser.email}</p>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li className="dropdown-item"><BsLockFill /> <a href="/login" onClick={this.logOut}>
                    LogOut
                  </a></li>
                </ul>
              ) : (
                  <ul className={this.state.isOpen ? "dropdown-menu dropdown-menu-right" : "dropdown-menu dropdown-menu-right"}>
                    <li className="dropdown-item user-details">
                      <a href="javaScript:void();">
                        <div className="media">
                          <div className="avatar"><img className="align-self-start mr-3" src="https://via.placeholder.com/110x110" alt="user avatar" /></div>
                          <div className="media-body">
                            <h6 className="mt-2 user-title">
                              <Link to={"/login"}>Login</Link>
                            </h6>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li className="dropdown-divider"></li>
                    <li className="dropdown-item"><i className="icon-envelope mr-2"></i>
                      <a href="/login" onClick={this.logOut}>
                        LogOut
                      </a></li>
                  </ul>
                )}
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
