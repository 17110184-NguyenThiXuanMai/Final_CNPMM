import React, { Component } from 'react'
import '../../../css/contact_1.css'
import contact from './contact.jpg'

export default class Contact extends Component {
	render() {
		return (
			<div>
				<div className="home">
					<div className="background_image"><img src={contact} /></div>
					<div className="home_container">
						<div className="container">
							<div className="row">
								<div className="col">
									<div className="home_content text-center">
										<div className="home_title">Contact</div>
										<div className="booking_form_container">
											<form action="#" className="booking_form" id="booking_form">
												<div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
													<div className="booking_input_container d-flex flex-row align-items-start justify-content-start flex-wrap">
														<div><input type="text" className="datepicker booking_input booking_input_a booking_in" placeholder="Check in" required="required" /></div>
														<div><input type="text" className="datepicker booking_input booking_input_a booking_out" placeholder="Check out" required="required" /></div>
														<div><input type="number" className="booking_input booking_input_b" placeholder="Children" required="required" /></div>
														<div><input type="number" className="booking_input booking_input_b" placeholder="Room" required="required" /></div>
													</div>
													<div><button className="booking_button trans_200">Book Now</button></div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="contact">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="contact_content">
									<div className="contact_title"><h2>Get in touch</h2></div>
									<div className="contact_list">
										<ul>
											<li>Main Str, no 253, New York, NY</li>
											<li>+546 990221 123</li>
											<li>music@contact.com</li>
										</ul>
									</div>
									<div className="contact_form_container">
										<form action="#" className="contact_form" id="contact_form">
											<div className="row">
												<div className="col-md-6 input_container">
													<input type="text" className="contact_input" placeholder="Your name" required="required" />
												</div>
												<div className="col-md-6 input_container">
													<input type="email" className="contact_input" placeholder="Your email address" required="required" />
												</div>
											</div>
											<div className="input_container"><input type="text" className="contact_input" placeholder="Subject" /></div>
											<div className="input_container"><textarea className="contact_input contact_textarea" placeholder="Message" required="required"></textarea></div>
											<button className="contact_button">Send</button>
										</form>
									</div>
								</div>
							</div>
							<div className="col-xl-5 col-lg-6 offset-xl-1">
								<div className="contact_map">
									<div className="map">
										<div id="google_map" className="google_map">
											<div className="map_container">
												<div id="map"></div>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
