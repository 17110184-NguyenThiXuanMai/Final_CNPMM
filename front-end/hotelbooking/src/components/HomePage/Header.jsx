import React, { Component } from 'react'
import AuthService from "../../services/Login/auth.service";
import jquery from 'jquery';

// for changing navbar  color
jquery(window).scroll(function () {
    jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})
export default class Header extends Component {
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
            // showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return (
            <header class="header">
                <div class="header_content d-flex flex-row align-items-center justify-content-start">
                    <div class="logo"><a href="/">The River</a></div>
                    <div class="ml-auto d-flex flex-row align-items-center justify-content-start">

                        <nav class="main_nav">
                            <ul class="d-flex flex-row align-items-start justify-content-start">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="/rooms">Rooms</a>
                                </li>
                                <li>
                                    <a href="/policy">Policy</a>
                                </li>
                                <li>
                                    <a href="/photo">Photo Library</a>
                                </li>
                                <li>
                                    <a href="/review">Review</a>
                                </li>
                                <li>
                                    <a href="/about">About</a>
                                </li>
                                <li>
                                    <a href="/contact">Contact</a>
                                </li>
                                {showModeratorBoard && (
                                    <li>
                                        <a href={"/mod"}>
                                            Moderator Board
                            </a>
                                    </li>
                                )}

                                {showAdminBoard && (
                                    <li>
                                        <a href="/admin">
                                            Admin Page
                            </a>
                                    </li>
                                )}
                            </ul>
                        </nav>
                        <ul class="d-flex flex-row align-items-start justify-content-start">
                            {currentUser ? (
                                <div className={this.state.isOpen ? "row" : "row"}>
                                    <div className="book_button">
                                        <a href={"/profile"}>
                                            {currentUser.username}
                                        </a>

                                    </div>
                                    <div className="book_button">
                                        <a href="/login" onClick={this.logOut}>
                                            LogOut
                                    </a>
                                    </div>
                                </div>
                            ) : (
                                    <div className={this.state.isOpen ? "row" : "row"}>
                                        <div className="book_button">
                                            <a href={"/login"}>
                                                Login
                                    </a>
                                        </div>
                                        <div className="book_button">
                                            <a href={"/signup"}>
                                                Sign Up
                                    </a>
                                        </div>
                                    </div>
                                )}
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
}


