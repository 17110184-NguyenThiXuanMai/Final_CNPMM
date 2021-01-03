import React, { Component } from 'react'
import Menu from '../../components/HomePage/Menu'
import Gallery from '../../components/HomePage/Gallery/Gallery'
import Features from '../../components/HomePage/Room/Features'
import FeaturedRooms from '../../components/HomePage/Room/FeaturedRooms'
import Home from '../../components/HomePage/Home/Home'
import Services from '../../components/HomePage/Service/Services';
// import ListImage from './LitsImage'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Home />
                <Features />
                <Gallery />
                <FeaturedRooms />
                <Services />
                {/* <ListImage /> */}
            </div>
        )
    }
}
