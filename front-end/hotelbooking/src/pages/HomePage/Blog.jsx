import React, { Component } from 'react'
import '../../css/review.css'
import booking from './booking.jpg'

export default class Blog extends Component {
    render() {
        return (
            <div>
              		<div className="home">
		<div className="background_image">{booking}</div>
		<div className="home_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="home_content text-center">
							<div className="home_title">Review</div>
							<div className="booking_form_container">
								<form action="#" className="booking_form" id="booking_form">
									<div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
										<div className="booking_input_container d-flex flex-row align-items-start justify-content-start flex-wrap">
											<div><input type="text" className="datepicker booking_input booking_input_a booking_in" placeholder="Check in" required="required" /></div>
											<div><input type="text" className="datepicker booking_input booking_input_a booking_out" placeholder="Check out" required="required" /></div>
											<div><input type="number" className="booking_input booking_input_b" placeholder="Children" required="required" /></div>
											<div><input type="number" className="booking_input booking_input_b" placeholder="Room" required="required"/></div>
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

	<div className="blog">
		<div className="container">
			<div className="row">				
				<div className="col-lg-9">
					<div className="blog_posts">					
						<div className="blog_post">
							<div className="blog_post_image">
								<img src="images/blog_1.jpg" alt="" />
								<div className="blog_post_date"><a href="#">Oct 20, 2018</a></div>
							</div>
							<div className="blog_post_content">
								<div className="blog_post_title"><a href="#">Top dream destinations</a></div>
								<div className="blog_post_info">
									<ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_4.png" alt="" />
											<a href="#">News</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_5.png" alt="" />
											<a href="#">21 Likes</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_6.png" alt="" />
											<a href="#">602 views</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_7.png" alt="" />
											<a href="#">1 min</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_8.png" alt="" />
											<a href="#">3 comments</a>
										</li>
									</ul>
								</div>
								<div className="blog_post_text">
									<p>Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementum. Fusce ut turpis felis. Etiam pretium pharetra augue, ac porttitor dolor consequat eget. Cras tempor suscipit enim vehicula ultrices. Mauris sed orci blandit.</p>
								</div>
								<div className="button blog_post_button"><a href="#">Read More</a></div>
							</div>
						</div>

						<div className="blog_post">
							<div className="blog_post_image">
								<img src="images/blog_2.jpg" alt="" />
								<div className="blog_post_date"><a href="#">Oct 20, 2018</a></div>
							</div>
							<div className="blog_post_content">
								<div className="blog_post_title"><a href="#">How to book your stay</a></div>
								<div className="blog_post_info">
									<ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_4.png" alt="" />
											<a href="#">News</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_5.png" alt="" />
											<a href="#">21 Likes</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_6.png" alt="" />
											<a href="#">602 views</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_7.png" alt="" />
											<a href="#">1 min</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_8.png" alt="" />
											<a href="#">3 comments</a>
										</li>
									</ul>
								</div>
								<div className="blog_post_text">
									<p>Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementum. Fusce ut turpis felis. Etiam pretium pharetra augue, ac porttitor dolor consequat eget. Cras tempor suscipit enim vehicula ultrices. Mauris sed orci blandit.</p>
								</div>
								<div className="button blog_post_button"><a href="#">Read More</a></div>
							</div>
						</div>
						<div className="blog_post">
							<div className="blog_post_image">
								<img src="images/blog_3.jpg" alt="" />
								<div className="blog_post_date"><a href="#">Oct 20, 2018</a></div>
							</div>
							<div className="blog_post_content">
								<div className="blog_post_title"><a href="#">Perfect beach wedding</a></div>
								<div className="blog_post_info">
									<ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_4.png" alt="" />
											<a href="#">News</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_5.png" alt="" />
											<a href="#">21 Likes</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_6.png" alt="" />
											<a href="#">602 views</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_7.png" alt="" />
											<a href="#">1 min</a>
										</li>
										<li className="d-flex flex-row align-items-center justify-content-start">
											<img src="images/icon_8.png" alt="" />
											<a href="#">3 comments</a>
										</li>
									</ul>
								</div>
								<div className="blog_post_text">
									<p>Vivamus auctor mi eget odio feugiat, quis aliquet velit ornare. Integer egestas sit amet neque sed elementum. Fusce ut turpis felis. Etiam pretium pharetra augue, ac porttitor dolor consequat eget. Cras tempor suscipit enim vehicula ultrices. Mauris sed orci blandit.</p>
								</div>
								<div className="button blog_post_button"><a href="#">Read More</a></div>
							</div>
						</div>

						<div className="page_nav">
							<ul className="d-flex flex-row align-items-start justify-content-start">
								<li className="active"><a href="#">01.</a></li>
								<li><a href="#">02.</a></li>
								<li><a href="#">03.</a></li>
							</ul>
						</div>

					</div>
				</div>
{/* 
				<div className="col-lg-3">
					<div className="sidebar">
						<div className="sidebar_search">
							<form action="#" className="sidebar_search_form" id="sidebar_saerch_form">
								<input type="text" className="sidebar_search_input" placeholder="Keyword" required="required" />
								<button className="sidebar_search_button">Search</button>
							</form>
						</div>

						<div className="recent_posts">
							<div className="sidebar_title"><h4>Recent Posts</h4></div>
							<div className="sidebar_list">
								<ul>
									<li><a href="#">Featured Product</a></li>
									<li><a href="#">Standard Post</a></li>
									<li><a href="#">Gallery Post</a></li>
									<li><a href="#">Video Post</a></li>
									<li><a href="#">Audio Post</a></li>
								</ul>
							</div>
						</div>

						<div className="categories">
							<div className="sidebar_title"><h4>Categories</h4></div>
							<div className="sidebar_list">
								<ul>
									<li><a href="#">News</a></li>
									<li><a href="#">Hotel</a></li>
									<li><a href="#">Vacation</a></li>
								</ul>
							</div>
						</div>

						<div className="tags">
							<div className="sidebar_title"><h4>Tags</h4></div>
							<div className="tags_container">
								<ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
									<li><a href="#">news</a></li>
									<li><a href="#">hotel</a></li>
									<li><a href="#">vacation</a></li>
									<li><a href="#">reservation</a></li>
									<li><a href="#">booking</a></li>
									<li><a href="#">video</a></li>
									<li><a href="#">clients</a></li>
									<li><a href="#">reviews</a></li>
									<li><a href="#">destinations</a></li>
									<li><a href="#">swimming pool</a></li>
								</ul>
							</div>
						</div>
						<div className="special_offer">
							<div className="background_image" ></div>
							<div className="special_offer_container text-center">
								<div className="special_offer_title">Special Offer</div>
								<div className="special_offer_subtitle">Family Room</div>
								<div className="button special_offer_button"><a href="#">Book now</a></div>
							</div>
						</div>

					</div>
				</div> */}

			</div>
		</div>
	</div>
	
            </div>
           
        )
    }
}