import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../components/HomePage/Header'
import Login from './HomePage/Login'
import Register from './HomePage/Register'
import HomePage from './HomePage/HomePage'
import Footer from '../components/HomePage/Footer'
import { Provider } from 'react-redux';
import store from '../services/store';
// import RoomDetail from './HomePage/RoomDetail'
import Profile from './HomePage/Profile'
import Rooms from './HomePage/Rooms'
import Booknow from './HomePage/Booknow'
import SingleRoom from './HomePage/SingleRoom'
import Blog from './HomePage/Blog'
import Contact from './HomePage/Contact'
import AboutUs from './HomePage/AboutUs'
import PrivateRoute from '../PrivateRoute';

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
                            {/* <Route exact path="/rooms/:id" component={RoomDetail} />  */}
                            <Route exact path="/rooms/" component={Rooms} />  
                            <Route exact path="/rooms/:id" component={SingleRoom} />   
                            <PrivateRoute exact path="/booknow/:id" component={Booknow} />     
                            <Route exact path="/review/" component={Blog} />   
                            <Route exact path="/contact/" component={Contact} />  
                            <Route exact path="/about/" component={AboutUs} />  
                            {/* <Route component={Error} /> */}
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
