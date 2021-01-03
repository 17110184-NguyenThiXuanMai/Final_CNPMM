import React, { Component } from 'react'
import Title from '../Title';
import '../../../css/restaurant.css'
import axios from 'axios';
import { Image } from 'react-bootstrap';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/test/services/findallenableandnotpageable")
            .then((data) => {
                this.setState({
                    services: data.data
                });
            });
    }

    render() {
        const { services } = this.state;
        return (
            <div>
                <Title title="Services" />
                <div className="split_section_right container_custom">
                    <div className="container">
                        {services.map((service) => {
                            if (service.id % 2 != 0) {
                                return <div className="row row-xl-eq-height">
                                    <div className="col-xl-6 order-xl-1 order-2">
                                        <div className="split_section_image">
                                            <Image src={service.url} className="background_image-img" />
                                        </div>
                                    </div>
                                    <div className="col-xl-6 order-xl-2 order-1">
                                        {/* <div className="split_section_right_content">
                                            <div className="split_section_title"><h1>{service.title}</h1></div>
                                            <div className="split_section_title"><span>{service.type}</span></div>
                                            <div className="split_section_text">
                                                <p>{service.description}</p>
                                            </div>
                                        </div> */}
                                        <div className="dining-caption">
                                            <h1>{service.title}</h1>
                                            <h3>{service.type}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            } else {
                                return <div className="row">
                                    <div className="col-xl-6">
                                        {/* <div className="split_section_left_content">
                                                <div className="split_section_title"><h1>{service.title}</h1></div>
                                                <div className="split_section_text">
                                                    <p>{service.description}</p>
                                                </div>
                                            </div> */}
                                        <div className="dining-caption">
                                            <h1>{service.title}</h1>
                                            <h3>{service.type}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="split_section_image split_section_left_image">
                                            <Image src={service.url} className="background_image-img" />
                                        </div>
                                    </div>
                                </div>
                            }
                        })}
                    </div>
                </div>
                {/* <div className="dining-area dining-padding-top">
            <div className="single-dining-area left-img">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-8 col-md-8">
                            <div className="dining-caption">
                                <span>Our resturent</span>
                                <h3>Dining & Drinks</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                                <a href="#" className="btn border-btn">Learn More <i className="ti-angle-right"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="single-dining-area right-img">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-lg-8 col-md-8">
                            <div className="dining-caption text-right">
                                <span>Our Pool</span>
                                <h3>Swimming Pool</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                                <a href="#" className="btn border-btn">Learn More  <i className="ti-angle-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> */}
            </div>
        )
    }
}
