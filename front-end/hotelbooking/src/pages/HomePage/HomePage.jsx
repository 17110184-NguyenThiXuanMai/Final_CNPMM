import React, { Component } from 'react'
import Menu from '../../components/HomePage/Menu'
import Gallery from '../../components/HomePage/Gallery/Gallery'
import Services from '../../components/HomePage/Service/Services'
import { Provider } from 'react-redux';
import store from '../../services/store';
import Features from '../../components/HomePage/Features'
import FeaturedRooms from '../../components/HomePage/FeaturedRooms'
import Home from '../../components/HomePage/Home/Home'
import Restaurant from './Restaurant/Restaurant';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Home />
                <Features />
                <Gallery />
                {/* <Room /> */}
                {/* <Provider store={store}>
                    <Room />
                </Provider> */}
                <FeaturedRooms />
                <Services />
                <Restaurant />
            </div>
        )
    }
}
