import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { deleteRoomType } from '../../../services/index';
// import { Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Carousel from 'react-elastic-carousel'
// import booking_1 from './booking_1.jpg'
import './booking.css'

class Booking extends Component {

    render() {
        return (

            <div className="booking">
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="booking_title text-center"><h2>Book a room</h2></div>
					<div className="booking_text text-center">
						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit.</p>
					</div>

					<div className="booking_slider_container">
						<div className="owl-carousel owl-theme booking_slider">
							
							<div className="booking_item">
								<div className="background_image"></div>
								<div className="booking_overlay trans_200"></div>
								<div className="booking_price">$120/Night</div>
								<div className="booking_link"><a href="booking.html">Family Room</a></div>
							</div>

							<div className="booking_item">
								<div className="background_image"></div>
								<div className="booking_overlay trans_200"></div>
								<div className="booking_price">$120/Night</div>
								<div className="booking_link"><a href="booking.html">Deluxe Room</a></div>
							</div>

							<div className="booking_item">
								<div className="background_image"></div>
								<div className="booking_overlay trans_200"></div>
								<div className="booking_price">$120/Night</div>
								<div className="booking_link"><a href="booking.html">Single Room</a></div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
        );
    }
}


export default Booking;




