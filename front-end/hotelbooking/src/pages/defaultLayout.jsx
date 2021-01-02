import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/HomePage/Header'
import Login from './HomePage/Login/Login'
import Register from './HomePage/Register/Register'
import HomePage from './HomePage/HomePage'
import Footer from '../components/HomePage/Footer/Footer'
import { Provider } from 'react-redux';
import store from '../services/store';
import Profile from './HomePage/Profile/Profile'
import Rooms from './HomePage/Room/Rooms'
import SingleRoom from './HomePage/Room/SingleRoom'
import Blog from '../pages/HomePage/Review/Blog'
import Contact from '../pages/HomePage/Contact/Contact'
import AboutUs from '../pages/HomePage/About/AboutUs'
import PrivateRoute from '../PrivateRoute';
import ListImage from './HomePage/LitsImage'
import Booknow from './HomePage/Booknow/Booknow'

export default class DefaultLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path={["/", "/home"]} component={HomePage} />
                    <body className="bg-theme bg-theme1">
                        <div id="pageloader-overlay" className="visible incoming"><div className="loader-wrapper-outer"><div className="loader-wrapper-inner" ><div className="loader"></div></div></div></div>
                        <div id="wrapper">
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/signup" component={Register} />
                            <Route exact path="/profile" component={Profile} />
                            <Provider store={store}>
                                <Route exact path="/rooms/" component={Rooms} />
                                <Route exact path="/rooms/:id" component={SingleRoom} />
                                <PrivateRoute exact path="/booknow/:id" component={Booknow} />
                                <Route exact path="/review/" component={Blog} />
                                <Route exact path="/contact/" component={Contact} />
                                <Route exact path="/about/" component={AboutUs} />
                                <Route path="/photo" component={ListImage} />
                            </Provider>
                        </div>
                    </body>
                    {/* <Route component={Error} /> */}
                </Switch>
                <Footer />
            </div>
        )
    }
}
