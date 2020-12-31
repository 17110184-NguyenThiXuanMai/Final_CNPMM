import React, { Component } from 'react'
import Sidebar from '../components/Admin/Sidebar'
import AdminHeader from '../components/Admin/AdminHeader'
import { Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../services/store';
import RoomTypeList from '../components/Admin/RoomType/RoomTypeList';
import CreateRoomType from '../components/Admin/RoomType/CreateRoomType';
import AdminProfile from './Admin/AdminProfile';
import Services from '../components/Admin/Services/Services';
import ServicesList from '../components/Admin/Services/ServicesList';
import Dashboard from '../components/Admin/Dashboard';
import CustomerDetail from '../components/HomePage/Booknow/CustomerDetail';
import BookingList from '../components/HomePage/Booknow/BookingList';
import BookingDetail from '../components/HomePage/Booknow/BookingDetail';
import CustomerList from '../components/HomePage/Booknow/CustomerList';

export default class adminDefaultLayout extends Component {

  render() {
    return (
      <body className="bg-theme bg-theme1">
        <div id="pageloader-overlay" className="visible incoming"><div className="loader-wrapper-outer"><div className="loader-wrapper-inner" ><div className="loader"></div></div></div></div>
        <div id="wrapper">
          <Sidebar />
          <AdminHeader />
          <div className="content-wrapper">
            <div className="container-fluid">
              <Switch>
                <Provider store={store}>
                  <Route exact path="/admin" component={Dashboard} />
                  <Route exact path="/admin/roomtypes" component={RoomTypeList} />
                  <Route exact path="/admin/addroomtypes" component={CreateRoomType} />
                  <Route path="/admin/editroomtype/:id" exact component={CreateRoomType} />
                  <Route path="/admin/profile" component={AdminProfile} />
                  <Route path="/admin/serviceslist" exact component={ServicesList} />
                  <Route path="/admin/addservices" exact component={Services} />
                  <Route path="/admin/editservices/:id" exact component={Services} />
                  <Route exact path="/admin/customers"
                    render={() =>
                      <>
                        <CustomerList customers={this.state.customers} onCustomerSelected={this.selectCustomer.bind(this)} />
                        <CustomerDetail customer={this.state.selectedCustomer} />
                      </> } />
                  <Route exact path="/admin/bookings"
                    render={() =>
                      <>
                        <BookingList bookingsData={this.state.bookings} onBookingSelected={this.selectBooking.bind(this)} />
                        <BookingDetail booking={this.state.selectedBooking} />
                      </>} />
                </Provider>
              </Switch>
            </div>
          </div>
        </div>
      </body>
    )
  }
}
