import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/Login/auth.service";

export default class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    const { currentUser } = this.state;

    return (
      <div className="limiter">
        <div className="container emp-profile">
          <div className="card">
            <div className="card-body">
              {(this.state.userReady) ?
                <div>
                  <form method="post">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="profile-img">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                          <div className="file btn btn-lg btn-primary">
                            <input type="file" name="file" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="profile-head">
                          <h1>
                            {currentUser.username} Profile
                        </h1>
                          <p className="proile-rating"></p>
                          <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <button type="button" className="btn btn-primary">Edit Profile</button>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4">
                      </div>
                      <div className="col-md-8">
                        <div className="tab-content profile-tab" id="myTabContent">
                          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div className="row">
                              <div className="col-md-4">
                                <label>User name: </label>
                              </div>
                              <div className="col-md-8">
                                {currentUser.username} Profile
                        </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <label>Id:</label>
                              </div>
                              <div className="col-md-8">
                                {currentUser.id}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <label>Email:</label>
                              </div>
                              <div className="col-md-8">
                                {currentUser.email}
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-4">
                                <label>Authorities:</label>
                              </div>
                              <div className="col-md-8">
                                {currentUser.roles &&
                                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}