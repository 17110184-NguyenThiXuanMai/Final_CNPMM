import React, { Component } from 'react'
import Title from '../Title';
import '../../../css/restaurant.css'
import { BsChevronRight } from "react-icons/bs";
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Image} from 'react-bootstrap';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/test/services/findallnotpageable")
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
                <section className="services">
                    <Title title="Services" />
                    {            services.map((service) => (
                          <div className="dining-area dining-padding-top" key={service.id}>
                             {/* <div className="single-dining-area left-img"> */}
                                     <div className="row">
                                         {/* <div className="col-lg-4 col-md-4"> */}
                                             <div className="dining-caption">
                                             <Image src={service.url} className="left-img" height="300" width="400"/>
                                                 <span>{service.title}</span>
                                                 <h3>{service.type}</h3>
                                                 <p>{service.description}</p>
                                                 <a href="#" className="btn-2 border-btn">Learn More <BsChevronRight /> </a>
                                             </div>
                                         </div>
                                     </div>
                                         ))}
                </section>
            </div>

        )
    }
}
