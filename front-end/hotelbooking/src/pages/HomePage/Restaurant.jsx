import React, { Component } from 'react'
import Title from '../../components/HomePage/Title';
import '../../css/restaurant.css'
import { BsChevronRight } from "react-icons/bs";
import axios from 'axios';

export default class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: [],
        };
    }


    render() {
        const { services } = this.state;
        return (
            <div>
                <section className="policy">
                    <Title title="Services" />
                </section>
                <div class="dining-area dining-padding-top">
                    <div class="single-dining-area left-img">
                        <div class="container">
                            <div class="row justify-content-end">
                                <div class="col-lg-8 col-md-8">
                                    <div class="dining-caption">
                                        {/* ( services.map((Services) => (  
                                        <span>Our resturent</span>
                                        <h3>Dining & Drinks</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                                        )))
                                        <a href="#" class="btn-2 border-btn">Learn More <BsChevronRight /> </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="single-dining-area right-img">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-8 col-md-8">
                                    <div class="dining-caption text-right">
                                        <span>Our Pool</span>
                                        <h3>Swimming Pool</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />veniam, quis nostrud.</p>
                                        <a href="#" class="btn-2 border-btn">Learn More  <BsChevronRight /> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
