import React, { Component } from 'react';
import {RoomContext} from '../../../context';
import Loading from './Loading';
import Room from './Room';
import Title from '../Title';
import '../../../css/main.css'

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        let { loading , featuredRooms: roomTypes} = this.context;
        roomTypes = roomTypes.map(roomType => {
            return <Room key={roomType.id} roomType={roomType} />
        });
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading?<Loading/>:<Room />}                  
                </div>
            </section>
        );
    }
}
