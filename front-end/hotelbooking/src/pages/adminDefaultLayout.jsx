import React, { Component } from 'react'
import Sidebar from '../components/Admin/Sidebar'
import AdminHeader from '../components/Admin/AdminHeader'
import { Switch, Route } from "react-router-dom";
// import AdminFooter from '../components/Admin/AdminFooter';
import { Provider } from 'react-redux';
import store from '../services/store';
import RoomTypeList from '../components/Admin/RoomType/RoomTypeList';
import CreateRoomType from '../components/Admin/RoomType/CreateRoomType';
import AdminProfile from './Admin/AdminProfile';
import Policy from '../components/Admin/Policy/Policy';
import PolicyList from '../components/Admin/Policy/PolicyList';
import Dashboard from '../components/Admin/Dashboard';
import CustomerDetail from '../components/HomePage/Booknow/CustomerDetail';
import BookingList from '../components/HomePage/Booknow/BookingList';
import BookingDetail from '../components/HomePage/Booknow/BookingDetail';
import CustomerList from '../components/HomePage/Booknow/CustomerList';

export default class adminDefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todayBookings: [],
          bookings: [],
          customers: [],
          transactions: [],
          restaurantTables: [],
          selectedBooking: {
            customer: {},
            restaurantTables: []
          },
          selectedRestaurantTable: null,
          selectedCustomer: {
            bookings: [{}]
          },
          selectedTransaction: null
        };
    
        this.onBookingSubmit =  this.onBookingSubmit.bind(this);
        this.onCustomerSubmit = this.onCustomerSubmit.bind(this);
      }
    
      fetchData(url, callback) {
        fetch(url, {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000"
          }
        })
          .then(res => res.json())
          .then(callback)
          .catch(error => {
            console.error(error);
          });
      }
    
      componentDidMount() {
        const today = new Date()
        const year = today.getFullYear()
        const month = `${today.getMonth() + 1}`.padStart(2, 0)
        const day = `${today.getDate()}`.padStart(2, 0)
        const stringDate = [year, month, day].join("-")
        // console.log(stringDate);
        // console.log(`http://localhost:8080/bookings/date/${stringDate}`);
    
        this.fetchData(`http://localhost:8080/api/test/bookings/date/${stringDate}`, bookings => {
          this.setState({ todayBookings: bookings });
        });
    
        this.fetchData("http://localhost:8080/api/test/bookings", bookings => {
          let newBookings = bookings._embedded.bookings;
          this.setState({ bookings: newBookings });
        });
        this.fetchData("http://localhost:8080/api/test/customers", customers => {
          this.setState({ customers: customers._embedded.customers });
        });
      }
    
      onBookingSubmit(payload){
        fetch('http://localhost:8080/api/test/bookings', {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000"
          },
          body: JSON.stringify(payload)
      })
      .then(res => res.json())
      .then(res => {   let bookings = [...this.state.bookings];
        bookings.push(res);
        this.setState({ bookings });
      })
      .catch(error => {
          console.error(error);
      });
      }
    
      onCustomerSubmit(payload){
          fetch('http://localhost:8080/api/test/customers', {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "http://localhost:3000"
            },
            body: JSON.stringify(payload)
          })
          .then(res => res.json())
          .then(res => {
            let customers = [...this.state.customers];
            customers.push(res);
            this.setState({ customers });
          })
          .catch(error => {
              console.error(error);
          });
      }
      selectBooking(selectedIndex) {
        const selectedBooking = this.state.bookings[selectedIndex];
        console.log(selectedBooking);
        this.setState({ selectedBooking })
      }
    
      selectCustomer(selectedIndex) {
        const selectedCustomer = this.state.customers[selectedIndex];
        this.setState({ selectedCustomer })
      }
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
                                <Route path="/admin/policy/type=:type" exact component={PolicyList} />
                                <Route path="/admin/policy" exact component={PolicyList} />  
                                <Route path="/admin/addpolicy" exact component={Policy} />  
                                <Route path="/admin/editpolicy/:id" exact component={Policy} />        
                                {/* <Route path="/admin/customer" exact component={CustomerDetail} />        */}
                                {/* <Route path="/admin/booklist" exact component={BookingList} />          */}

                                <Route
              exact
              path="/admin/customers"
              render={() =>
                <>
                <CustomerList customers={this.state.customers}
              onCustomerSelected={this.selectCustomer.bind(this)}/>
              <CustomerDetail customer={this.state.selectedCustomer}/>
              </>}
            />

<Route
              exact
              path="/admin/bookings"
              render={() =>
                <>
                <BookingList
                  bookingsData={this.state.bookings}
                  onBookingSelected={this.selectBooking.bind(this)}
                />
                <BookingDetail
                  booking={this.state.selectedBooking}
                />
              </>}
            />
                                </Provider>
                            </Switch>
                        </div>
                    </div>
                    {/* <AdminFooter /> */}
                </div>
            </body>
        )
    }
}
