import React, { Component } from 'react';

import { connect } from 'react-redux';
import { saveRoomType, fetchRoomType, updateRoomType } from '../../../services/index';
import moment from 'moment';
import DatePicker from "react-datepicker";
import { Link } from 'react-router-dom'
import { RoomContext } from '../../../context'
import axios from 'axios';
import "../../../css/main.css"
import "react-datepicker/dist/react-datepicker.css";
import CustomerForm from '../../../components/HomePage/Booknow/CustomerForm'
import BookingForm from '../../../components/HomePage/Booknow/BookingForm'
import CustomerList from '../../../components/HomePage/Booknow/CustomerList';
import CustomerDetail from '../../../components/HomePage/Booknow/CustomerDetail';

class Booknow extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state = {
            customerId: '',
            startDate: '',
            endDate: '',
            selectedRoomType: [],
        };
        this.state = {
            todayBookings: [],
            bookings: [],
            customers: [],
            selectedBooking: {
                customer: {},
            },
            selectedCustomer: {
                bookings: [{}]
            },
        };
        this.roomTypeChange = this.roomTypeChange.bind(this);
        this.onBookingSubmit = this.onBookingSubmit.bind(this);
        this.onCustomerSubmit = this.onCustomerSubmit.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    customerOptions() {
        const customerOptions = this.props.customers.map((customer) => {
            return (
                <option value={customer.id} key={customer.id}>{customer.name}</option>
            );
        });
        return customerOptions;
    }

    initialState = {
        id: '', titleRoomType: '', slug: '', type: '', size: '', amount: '', capacity: '', pets: '', breakfast: '', bath: '', television: '', description: '', coverPhotoURL: '', price: ''
    };
    static contextType = RoomContext;

    componentDidMount() {
        const roomTypeId = +this.props.match.params.id;
        if (roomTypeId) {
            this.findRoomTypeById(roomTypeId);
        }
        this.findAllTypes();
        const today = new Date()
        const year = today.getFullYear()
        const month = `${today.getMonth() + 1}`.padStart(2, 0)
        const day = `${today.getDate()}`.padStart(2, 0)
        const stringDate = [year, month, day].join("-")
    
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
        this.fetchData("http://localhost:8080/api/test/transactions", transactions => {
            this.setState({ transactions: transactions._embedded.transactions });
        });
        this.fetchData(
            "http://localhost:8080/api/test/restaurant-tables",
            restaurantTables => {
                this.setState({ restaurantTables: restaurantTables });
            }
        );
        this.fetchData(
            `http://localhost:8080/api/test/restaurant-tables/availableondate/${stringDate}`,
            restaurantTables => {
                this.setState({ restaurantTablesOnDate: restaurantTables });
                this.setState({ dateChosen: stringDate })
                console.log('date chosen', stringDate);
            }
        );
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }
    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }
    calculateDaysLeft(startDate, endDate) {
        if (!moment.isMoment(startDate)) startDate = moment(startDate);
        if (!moment.isMoment(endDate)) endDate = moment(endDate);
        return endDate.diff(startDate, "days");
    }

    findAllTypes = () => {
        axios.get("http://localhost:8080/api/test/roomtypes/types")
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    types: [{ value: '', display: 'Select Type' }]
                        .concat(data.map(type => {
                            return { value: type, display: type }
                        }))
                });
            });
    };

    findRoomTypeById = (roomTypeId) => {
        this.props.fetchRoomType(roomTypeId);
        setTimeout(() => {
            let roomType = this.props.roomTypeObject.roomType;
            if (roomType != null) {
                this.setState({
                    id: roomType.id,
                    titleRoomType: roomType.titleRoomType,
                    slug: roomType.slug,
                    type: roomType.type,
                    size: roomType.size,
                    amount: roomType.amount,
                    capacity: roomType.capacity,
                    pets: roomType.pets,
                    breakfast: roomType.breakfast,
                    bath: roomType.bath,
                    television: roomType.television,
                    description: roomType.description,
                    coverPhotoURL: roomType.coverPhotoURL,
                    price: roomType.price
                });
            }
        }, 1000);
    };

    resetRoomType = () => {
        this.setState(() => this.initialState);
    };

    roomTypeChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    roomTypeList = () => {
        return this.props.history.push("/admin");
    };

    handleSubmit(event) {
        event.preventDefault();

        const payload = {
            "customer": `http://localhost:8080/api/test/customers/${this.state.customerId}`,
            "startDate": this.state.startDate,
            "endDate": this.state.endDate,
            "selectedRoomType": this.state.selectedRoomType,
        };

        this.props.onSubmit(payload)

        this.setState({
            customerId: '',
            selectedRoomType: [],
            startDate: '',
            endDate: ''
        })
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

    onCustomerSubmit(payload) {
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

    onBookingSubmit(payload) {
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
            .then(res => {
                let bookings = [...this.state.bookings];
                bookings.push(res);
                this.setState({ bookings });
            })
            .catch(error => {
                console.error(error);
            });
    }

    selectCustomer(selectedIndex) {
        const selectedCustomer = this.state.customers[selectedIndex];
        this.setState({ selectedCustomer })
    }

    render() {
        const { startDate, endDate } = this.state;
        const daysLeft = this.calculateDaysLeft(startDate, endDate);

        return (
            <div className="bg-gra-01 p-t-180 p-b-100">
                <div className="container my-0">
                    <div className="row">
                        <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
                            <div>
                                <h1 className="display-4">Booking</h1>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <CustomerForm
                                        onSubmit={this.onCustomerSubmit}
                                    />
                                </div>
                                <div className="col">
                                    <BookingForm
                                        onSubmit={this.onBookingSubmit}
                                        customers={this.state.customers} />
                                </div>
                                <CustomerList customers={this.state.customers}
                                    onCustomerSelected={this.selectCustomer.bind(this)} />
                                <CustomerDetail customer={this.state.selectedCustomer} />
                            </div>
                            <div className="row" onSubmit={this.handleSubmit}>
                                <div className="col-md-6 col-12 my-auto">
                                    <img src={this.state.coverPhotoURL} className="img-fluid" alt="selected room" />
                                </div>
                                <div className="col-md-6 col-12 my-auto">
                                    <h1>Rooms Details</h1>
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Room Type</th>
                                                <td>{this.state.titleRoomType}</td>
                                            </tr>
                                            <tr>
                                                <th>Capacity</th>
                                                {/* <td>{capacity}</td> */}
                                                <td>{this.state.capacity}</td>
                                            </tr>
                                            <tr>
                                                <th>Size</th>
                                                {/* <td>{size} sqft.</td> */}
                                                <td>{this.state.size} sqft.</td>
                                            </tr>
                                            <tr>
                                                <th>Amount</th>
                                                {/* <td>{size} sqft.</td> */}
                                                <td>{this.state.amount} </td>
                                            </tr>
                                            <tr>
                                                <th>Amount</th>
                                                {/* <td>{size} sqft.</td> */}
                                                <td>{this.state.amount} </td>
                                            </tr>
                                            <tr>
                                                <th>Breakfast</th>
                                                <td>{this.state.breakfast === true ? `Included` : `Not Included`}</td>
                                            </tr>
                                            <tr>
                                                <th>Pets</th>
                                                <td>{this.state.pets === true ? `Allowed` : `Not Allowed`}</td>
                                            </tr>
                                            <tr>
                                                <th>Television</th>
                                                <td>{this.state.television === true ? `Have` : `Have Not`}</td>
                                            </tr>
                                            <tr>
                                                <th>Bath</th>
                                                <td>{this.state.bath === true ? `Have` : `Have Not`}</td>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            </div>

                            <div className="row my-3">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
                                        <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart} className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
                                        <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} className="form-control" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-12">
                                    <h6 className="font-weight-bolder">Number of days : {daysLeft}</h6>
                                    <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
                                </div>
                                <div className="col-md-6 col-12">
                                    <h6 className="font-weight-bold">Price per day : <span className="badge badge-info">Rs {this.state.price}</span></h6>
                                    <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">Rs {daysLeft * (this.state.price)}</span></h6>
                                </div>
                            </div>

                            <div className="row my-4">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="payment" className="font-weight-bolder">Payment Options</label>
                                        <select className="form-control">
                                            <option disabled>Select payment option</option>
                                            <option value="Credit">Credit Card</option>
                                            <option value="Debit">Debit Card</option>
                                            <option value="checkin">Pay during Checkin</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 my-auto">
                                    <div className="col-md-6 col-12 float-right">
                                        <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks" type="submit">Confirm Booking</button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="modal fade" id="thanks">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body p-4">
                                    <h3>Thank you </h3>
                                    <p className="lead">Your room is booked successfully....</p>
                                </div>
                                <div className="modal-footer">
                                    <Link to="/" className="btn btn-dark">Goto Home</Link>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        savedRoomTypeObject: state.roomType,
        roomTypeObject: state.roomType,
        updatedRoomTypeObject: state.roomType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveRoomType: (roomType) => dispatch(saveRoomType(roomType)),
        fetchRoomType: (roomTypeId) => dispatch(fetchRoomType(roomTypeId)),
        updateRoomType: (roomType) => dispatch(updateRoomType(roomType))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Booknow);














// import React, { Component } from 'react'
// import { RoomContext } from '../../context';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import defaultBcg from '../../images/room-3.jpeg';
// export default class Booknow extends Component {
//     constructor (props){
//         super(props);
//         this.state = {
//         slug: this.props.match.params.slug,
//         defaultBcg,
//         startDate: new Date(),
//         endDate: new Date(),
//     };
//     this.handleChangeEnd = this.handleChangeEnd.bind(this);
//     this.handleChangeStart = this.handleChangeStart.bind(this);
//     }
//     handleChangeStart(date) {
//         this.setState({
//         startDate: date
//         });
//     }
//     handleChangeEnd(date) {
//         this.setState({
//         endDate: date
//         });
//     }
//     calculateDaysLeft(startDate, endDate) {
//         if (!moment.isMoment(startDate)) startDate = moment(startDate);
//         if (!moment.isMoment(endDate)) endDate = moment(endDate);
//         return endDate.diff(startDate, "days");
//     }
//     static contextType = RoomContext;
//     render() {
//         const { getRoom } = this.context;
//         const room = getRoom(this.state.slug);
//         const { startDate, endDate } = this.state;
//         const daysLeft = this.calculateDaysLeft(startDate, endDate);
//     if(!room){
//         return (<div className="container roomerror">
//             <div className="row my-5">
//                 <div className="col-md-6 col-12 mx-auto">
//                     <div className="card shadow-lg border-0 p-4 error">
//                         <h1 className="text-center display-4">SORRY</h1>
//                         <h3>No such room could be found...</h3>
//                         <Link to="/rooms" className="btn btn-warning mt-4 ">Back to Rooms</Link>
//                     </div>
//                 </div>
//             </div>
//         </div>);
//         }
//         const {name,capacity,size,price,breakfast,pets,images} = room;
//         const [mainImg, ...defaultBcg] = images;
//         return (
//             <div className="bg-gra-01">
//         <div className="container my-0">
//             <div className="row">
//                 <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
//                     <div>
//                         <h1 className="display-4">Booking</h1>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6 col-12 my-auto">
//                             <img src={mainImg || defaultBcg} className="img-fluid" alt="selected room" />
//                         </div>
//                         <div className="col-md-6 col-12 my-auto">
//                             <h1>Rooms Details</h1>
//                             <table className="table">
//                                 <thead className="thead-light">
//                                     <tr>
//                                         <th>Room Type</th>
//                                         <td>{name}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Capacity</th>
//                                         <td>{capacity}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Size</th>
//                                         <td>{size} sqft.</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Breakfast</th>
//                                         <td>{breakfast === true ? `Included`: `Not Included`}</td>
//                                     </tr>
//                                     <tr>
//                                         <th>Pets</th>
//                                         <td>{pets ===true ? `Allowed` : `Not Allowed`}</td>
//                                     </tr>
//                                 </thead>
//                             </table>
//                         </div>
//                     </div>
//                     <div className="row my-3">
//                         <div className="col-md-6 col-12">
//                             <div className="form-group">
//                                 <label htmlFor="Fromdate" className="font-weight-bolder mr-3">From Date </label>
//                                 <DatePicker selected={this.state.startDate} onChange={this.handleChangeStart} className="form-control" />
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-12">
//                             <div className="form-group">
//                                 <label htmlFor="Todate" className="font-weight-bolder mr-3">To Date </label>
//                                 <DatePicker selected={this.state.endDate} onChange={this.handleChangeEnd} className="form-control" />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-md-6 col-12">
//                             <h6 className="font-weight-bolder">Number of days : {daysLeft}</h6>
//                             <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
//                         </div>
//                         <div className="col-md-6 col-12">
//                             <h6 className="font-weight-bold">Price per day : <span className="badge badge-info">Rs {price}</span></h6>
//                             <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">Rs {daysLeft*price}</span></h6>
//                         </div>
//                     </div>
//                     <div className="row my-4">
//                         <div className="col-md-6 col-12">
//                             <div className="form-group">
//                                 <label htmlFor="payment" className="font-weight-bolder">Payment Options</label>
//                                 <select className="form-control">
//                                     <option disabled>Select payment option</option>
//                                     <option value="Credit">Credit Card</option>
//                                     <option value="Debit">Debit Card</option>
//                                     <option value="checkin">Pay during Checkin</option>
//                                 </select>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-12 my-auto">
//                             <div className="col-md-6 col-12 float-right">
//                                 <button className="btn btn-block btn-outline-primary" data-toggle="modal" data-target="#thanks">Confirm Booking</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="modal fade" id="thanks">
//                 <div className="modal-dialog modal-dialog-centered">
//                     <div className="modal-content">
//                         <div className="modal-body p-4">
//                             <h3>Thank you </h3>
//                             <p className="lead">Your room is booked successfully....</p>
//                         </div>
//                         <div className="modal-footer">
//                             <Link to="/" className="btn btn-dark">Goto Home</Link>
//                             <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         </div>
//         )
//     }
// }

