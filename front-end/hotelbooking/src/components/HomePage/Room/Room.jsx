import React, { Component } from 'react';
import '../../../css/Style.css';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './room.css'

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTypes: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/test/roomtypes/findallnotpageable")
            .then((data) => {
                this.setState({
                    roomTypes: data.data
                });
            });
    }

    render() {
        const { roomTypes } = this.state;
        return (
            <div className="packages-content">
                <div className="row">
                    {roomTypes.map((roomType) => (
                        <div className="col-md-4 col-sm-6">
                            <div className="single-package-item">
                                <Image src={roomType.coverPhotoURL} alt="single room" height="300" width="400" />
                                <div className="single-package-item-txt">
                                    <h3>{roomType.titleRoomType} <span className="pull-right">${roomType.price}</span></h3>
                                    <div className="packages-para">
                                        <p>
                                            <span>
                                                <i className="fa fa-angle-right"></i> 3 Days 2 nights
                                            </span>
                                            <i className="fa fa-angle-right"></i>  5 star accomodation
                                        </p>
                                        <p>
                                            <span>
                                                <i className="fa fa-angle-right"></i>  transportation
                                             </span>
                                            <i className="fa fa-angle-right"></i> food facilities
                                        </p>
                                    </div>
                                    <div className="packages-review">
                                        <p>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <span>254 reviews</span>
                                        </p>
                                    </div>
                                    <div className="about-btn">
                                        <button className="about-view packages-btn">
                                            <Link to={`/rooms/` + roomType.id}>Features</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Room;