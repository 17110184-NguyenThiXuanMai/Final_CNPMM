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

            <div class="booking">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="booking_title text-center"><h2>Book a room</h2></div>
					<div class="booking_text text-center">
						<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit.</p>
					</div>

					<div class="booking_slider_container">
						<div class="owl-carousel owl-theme booking_slider">
							
							<div class="booking_item">
								<div class="background_image"></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Family Room</a></div>
							</div>

							<div class="booking_item">
								<div class="background_image"></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Deluxe Room</a></div>
							</div>

							<div class="booking_item">
								<div class="background_image"></div>
								<div class="booking_overlay trans_200"></div>
								<div class="booking_price">$120/Night</div>
								<div class="booking_link"><a href="booking.html">Single Room</a></div>
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



