import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRoomType } from '../../../services/index';
import Banner from '../../../components/HomePage/Room/Banner';
import { Link } from 'react-router-dom'
import StyledHero from '../../../components/HomePage/Room/StyledHero';
import axios from 'axios';
import './booking.css';
import { Image } from 'react-bootstrap';

class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTypes: [],
            type: [],
            show: false,
        };
        this.roomTypeChange = this.roomTypeChange.bind(this);
    }

    componentDidMount() {
        const roomTypeId = +this.props.match.params.id;
        if (roomTypeId) {
            this.findRoomTypeById(roomTypeId);
        }
        this.findAllTypes();
        axios.get("http://localhost:8080/api/test/roomtypes/findallnotpageable")
            .then((data) => {
                this.setState({
                    roomTypes: data.data
                });
            });
    }

    findAllTypes = () => {
        axios.get("http://localhost:8080/api/test/roomtypes/types")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    types: [{ value: '', display: 'Select Type' }]
                        .concat(data.map(type => {
                            return { value: type, display: type }
                        }))
                });
            });
    };

    findRoomTypeById = (roomTypeId) => {
        this.props.fetchRoomType(roomTypeId);
        setTimeout(() => {
            let roomType = this.props.roomTypeObject.roomType;
            if (roomType != null) {
                this.setState({
                    id: roomType.id,
                    titleRoomType: roomType.titleRoomType,
                    bedType: roomType.bedType,
                    type: roomType.type,
                    price: roomType.price,
                    size: roomType.size,
                    amount: roomType.amount,
                    adults: roomType.adults,
                    children: roomType.children,
                    pets: roomType.pets,
                    breakfast: roomType.breakfast,
                    television: roomType.television,
                    bath: roomType.bath,
                    description: roomType.description,
                    coverPhotoURL: roomType.coverPhotoURL,
                });
            }
        }, 1000);
    };

    roomTypeChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    roomTypeList = () => {
        return this.props.history.push("/admin");
    };
    render() {
        const { roomTypes } = this.state;
        return (
            <div>
                <StyledHero img={this.state.coverPhotoURL}>
                    <Banner title={`${this.state.titleRoomType} room`}>
                        <Link to="/rooms" className="btn-primary">
                            back to rooms
                         </Link>
                    </Banner>
                </StyledHero>
                <div className="booking">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="booking_title text-center"><h2>Book a room</h2></div>
                                <div className="booking_text text-center">
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse nec faucibus velit. Quisque eleifend orci ipsum, a bibendum lacus suscipit sit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="booking">
                    <div className="container">
                        <div className="row">
                            {roomTypes.map((roomType) => (
                                <div className="col-md-4 col-12 mx-auto" key={roomType.id}>
                                    <div className="card border-0 shadow-lg">
                                        <Image src={roomType.coverPhotoURL} alt="single room" height="300" width="400" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="booking">
                    <div className="details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="details_image">
                                        <Image src={this.state.coverPhotoURL} alt="single room" className="background_image" />
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="details_content">
                                        <div className="details_title">{this.state.titleRoomType} Room</div>
                                        <div className="details_list">
                                            <ul>
                                                <li>Price : ${this.state.price}</li>
                                                <li>Size : {this.state.size} SQFT</li>
                                                <li>Amount: {this.state.amount}</li>
                                                <li>Type: {this.state.type}</li>
                                                <li>Bed Type: {this.state.bedType}</li>
                                                <li>Adults: {this.state.adults}</li>
                                                <li>Children: {this.state.children}</li>
                                                <li>{this.state.pets ? "Pets allowed" : "No pets allowed"}</li>
                                                <li>{this.state.breakfast && "Free breakfast included"}</li>
                                                <li>{this.state.television ? "Have television" : "Have not television"}</li>
                                                <li>{this.state.bath ? "Have bath" : "Have not bath"}</li>
                                                <li>{this.state.description}</li>
                                            </ul>
                                        </div>
                                        <div className="details_long_list">
                                            <ul className="d-flex flex-row align-items-start justify-content-start flex-wrap">
                                                <li>Balcony</li>
                                                <li>Mountain view</li>
                                                <li>Terrace</li>
                                                <li>TV</li>
                                                <li>Satellite Channels</li>
                                                <li>Safety Deposit Box</li>
                                                <li>Heating</li>
                                                <li>Sofa</li>
                                                <li>Tile/Marble floor</li>
                                                <li>Mosquito net</li>
                                                <li>Wardrobe/Closet</li>
                                                <li>Sofa bed</li>
                                                <li>Shower</li>
                                                <li>Hairdryer</li>
                                                <li>Free toiletries</li>
                                                <li>Toilet</li>
                                                <li>Bath or Shower</li>
                                                <li>Toilet paper</li>
                                                <li>Tea/Coffee Maker</li>
                                                <li>Minibar</li>
                                                <li>Dining area</li>
                                                <li>Electric kettle</li>
                                                <li>Dining table</li>
                                                <li>Outdoor furniture</li>
                                                <li>Outdoor dining area</li>
                                                <li>Towels</li>
                                                <li>Linen</li>
                                                <li>Upper floors accessible by lift</li>
                                            </ul>
                                        </div>
                                        <div className="book_now_button"><Link to={`/booknow/${this.state.id}`}>Book Now</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        roomTypeObject: state.roomType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRoomType: (roomTypeId) => dispatch(fetchRoomType(roomTypeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRoom);