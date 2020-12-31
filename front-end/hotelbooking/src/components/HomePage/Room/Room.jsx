import React, { Component } from 'react';
import '../../../css/Style.css';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTypes: [],
            search: '',
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

    searchData = (currentPage) => {
        currentPage -= 1;
        axios.get("http://localhost:8080/api/test/roomtypes/search/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.roomTypesPerPage)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    roomTypes: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };

    render() {
        const { roomTypes } = this.state;
        return (
            roomTypes.map((roomType) => (
                <article className="room">
                    <div className="img-container">
                        <Image src={roomType.coverPhotoURL} alt="single room" height="300" width="400" />
                        <div className="price-top">
                            <h6>${roomType.price}</h6>
                            <p>per night</p>
                        </div>
                        <Link to={`/rooms/` + roomType.id} className="btn-primary room-link">Features</Link>
                    </div>
                    <p className="room-info">{roomType.titleRoomType}</p>
                </article>
            ))
        );
    }
}

export default Room;