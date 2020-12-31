import React, { Component } from 'react'
import './footer.css'
import { BiBeenHere, BiPhone, BiEnvelope } from "react-icons/bi";

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="new_footer_area bg_color">
                    <div className="new_footer_top">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="footer_logo_container text-center">
                                        <div className="footer_logo">
                                            <a href="#"></a>
                                            <div>The River</div>
                                            <div>since 1945</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <div className="f_widget company_widget wow fadeInLeft">
                                        <h3 className="f-title f_600 t_color f_size_18">Contact</h3>
                                        <p>Enter your email</p>
                                        <form action="#" className="newsletter_form" id="newsletter_form">
                                            <input type="email" className="newsletter_input" placeholder="Your email address" required="required" />
                                            <button className="newsletter_button">Subscribe</button>
                                        </form>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="f_widget about-widget pl_70 wow fadeInLeft">
                                        <ul className="list-unstyled f_list">
                                            <li><a href="#"> <BiBeenHere /> 12-14 Tran Phu - Nha Trang - Vietnam 650000 Nha Trang Vietnam</a></li>
                                            <li><a href="#"> <BiPhone /> +84 258 3820999</a></li>
                                            <li><a href="#"> <BiEnvelope /> info@sunrisenhatrang.com.vn</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer_bg">
                            <div className="footer_bg_one"></div>
                            <div className="footer_bg_two"></div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-7">
                                    <p className="mb-0 f_400">© cakecounter Inc.. 2019 All rights reserved.</p>
                                </div>
                                <div className="col-lg-6 col-sm-5 text-right">
                                    <p>Made with <i className="icon_heart"></i> in <a href="#">CakeCounter</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;
