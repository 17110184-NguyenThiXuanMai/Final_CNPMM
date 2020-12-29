import React from 'react'
import Hero from '../../../components/HomePage/Hero'
import Banner from '../../../components/HomePage/Banner';
import {Link} from 'react-router-dom'
import RoomContainer from '../../../components/HomePage/RoomContainer'

const Rooms = () => {
    return (
        <>
    <Hero hero="roomsHero">
        <Banner title="Available Rooms" subtitle="Best in Class Room">
            <Link to='/' className="btn-primary">
                return home
            </Link>
        </Banner>
    </Hero>
    <RoomContainer />
    </>   
    );
};

export default Rooms;

