import React, { Component } from 'react'
import '../HomePage/about_2.css'
import about from './about.jpg'
// import loaders from './loaders.jpg'

export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <div className="home">
		<div className="background_image"><img src={about} /></div>
		<div className="home_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home_content text-center">
							<div className="home_title">About us</div>
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


	<div className="about">
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<div className="about_title"><h2>The River / 10 years of excellence</h2></div>
				</div>
			</div>
			<div className="row about_row">
				
				<div className="col-lg-6">
					<div className="about_content">
						<div className="about_text">
							<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit.</p>
						</div>
						<div className="about_sig"><img src="images/sig.png" alt="" /></div>
					</div>
				</div>

				<div className="col-lg-6">
					<div className="about_images d-flex flex-row align-items-start justify-content-between flex-wrap">
						<img src="images/about_1.png" alt="" />
						<img src="images/about_2.png" alt="" />
						<img src="images/about_3.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	</div>

            </div>
        )
    }
}
