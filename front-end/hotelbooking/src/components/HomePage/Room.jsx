import React, { Component } from 'react';
import './../../css/Style.css';
import {Image} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTypes: [],
            search: ''
        };
    }

    componentDidMount() {
        axios.get("http://localhost:8080/api/test/roomtypes/findallnotpegeable")
            // .then(response => response.data)
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
                        <Image src={roomType.coverPhotoURL} alt="single room" />
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




// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import defaultImg from '../../images/room-1.jpeg';
//  import PropTypes from 'prop-types';
// export default function Room({room}) {
//     const{name, slug, images, price} = room;
//     return (
//         <article className="room">
//             <div className="img-container">
//                 <img src={images[0] || defaultImg} alt="single room" />
//                 <div className="price-top">
//                     <h6>${price}</h6>
//                     <p>per night</p>
//                 </div>
//                 <Link to={`/rooms/${slug}`} className="btn-primary room-link">Features</Link>
//             </div>
//             <p className="room-info">{name}</p>
//         </article>
//     );
// }

// Room.propTypes = {
//     room: PropTypes.shape({
//         name:PropTypes.string.isRequired,
//         slug:PropTypes.string.isRequired,
//         images:PropTypes.arrayOf(PropTypes.string).isRequired,
//         price:PropTypes.number.isRequired,
//     })
// }



