import React, { Component } from 'react'

export default class Menu extends Component {
	render() {
		return (
			<div>
				<div className="menu trans_400 d-flex flex-column align-items-end justify-content-start">
					<div className="menu_close"><i className="fa fa-times" aria-hidden="true"></i></div>
					<div className="menu_content">
						<nav className="menu_nav text-right">
							<ul>
								<li><a href="index.html">Home</a></li>
								<li><a href="about.html">About us</a></li>
								<li><a href="#">Rooms</a></li>
								<li><a href="blog.html">Blog</a></li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</nav>
					</div>
					<div className="menu_extra">
						<div className="menu_book text-right"><a href="#">Book online</a></div>
						<div className="menu_phone d-flex flex-row align-items-center justify-content-center">
							<img src="images/phone-2.png" alt="" />
							<span>0183-12345678</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
