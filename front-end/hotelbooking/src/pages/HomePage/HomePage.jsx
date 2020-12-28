import React, { Component } from 'react'
import Menu from '../../components/HomePage/Menu'
import Gallery from '../../components/HomePage/Gallery/Gallery'
import Services from '../../components/Service/Services'
import { Provider } from 'react-redux';
import store from '../../services/store';
import Features from '../../components/HomePage/Features'
import FeaturedRooms from '../../components/HomePage/FeaturedRooms'
import Restaurant from '../HomePage/Restaurant'
import Home from '../../components/HomePage/Home/Home'

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
