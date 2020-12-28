import React, { Component } from 'react'
import './home.css'

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="home">
					<div className="home_slider_container">
						<div className="owl-carousel owl-theme home_slider">
							<div className="slide">
								<div className="background_image"></div>
								<div className="home_container">
									<div className="container">
										<div className="row">
											<div className="col">
												<div className="home_content text-center">
													<div className="home_title">A Luxury Stay</div>
													<div className="booking_form_container">
														<form action="#" className="booking_form">
															<div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
																<div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
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

							<div className="slide">
								<div className="background_image"></div>
								<div className="home_container">
									<div className="container">
										<div className="row">
											<div className="col">
												<div className="home_content text-center">
													<div className="home_title">A Luxury Stay</div>
													<div className="booking_form_container">
														<form action="#" className="booking_form">
															<div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
																<div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
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

							<div className="slide">
								<div className="background_image"></div>
								<div className="home_container">
									<div className="container">
										<div className="row">
											<div className="col">
												<div className="home_content text-center">
													<div className="home_title">A Luxury Stay</div>
													<div className="booking_form_container">
														<form action="#" className="booking_form">
															<div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
																<div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
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
						</div>

						<div className="home_slider_dots_container">
							<div className="home_slider_dots">
								<ul id="home_slider_custom_dots" className="home_slider_custom_dots d-flex flex-row align-items-start justify-content-start">
									<li className="home_slider_custom_dot active">01.</li>
									<li className="home_slider_custom_dot">02.</li>
									<li className="home_slider_custom_dot">03.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
