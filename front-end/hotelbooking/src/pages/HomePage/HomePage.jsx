import React, { Component } from 'react'
import Menu from '../../components/HomePage/Menu'
import Gallery from '../../components/HomePage/Gallery/Gallery'
import Features from '../../components/HomePage/Features'
import FeaturedRooms from '../../components/HomePage/FeaturedRooms'
import Home from '../../components/HomePage/Home/Home'
import Services from '../../components/HomePage/Service/Services';
import ServicesList from '../../components/Admin/RoomType/RoomTypeList'
import { Provider } from 'react-redux';
import store from '../../services/store';

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
                {/* <FeaturedService /> */}
                {/* <Provider store={store}>
                <ServicesList />
                </Provider> */}
            </div>
        )
    }
}
