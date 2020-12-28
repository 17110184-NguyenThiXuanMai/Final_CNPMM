import React, {Component} from 'react';
import moment from 'moment';
import DatePicker from "react-datepicker";

class BookingForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            customerId: '',
            startDate: '',
            endDate: '',
            selectedRoomType: [],
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
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

    customerOptions() {
        const customerOptions = this.props.customers.map((customer) => {
            return (
                <option value={customer.id} key={customer.id}>{customer.name}</option>
            );
        });
        return customerOptions;
    }

    handleInputChange (event) {
        const stateName = event.target.name;
        const value = event.target.value;
        this.setState({
            [stateName]: value
        });
    }

    calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
    }

    handleSubmit(event) {
        event.preventDefault();

        const payload = {
            "customer": `http://localhost:8080/api/test/customers/${ this.state.customerId }`,
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

    render () {
        const { startDate, endDate } = this.state;
        const daysLeft = this.calculateDaysLeft(startDate, endDate);

        return (
            <div className="booking-form">
                {/* <h2>Booking Form</h2> */}
                <form id = "booking-form" onSubmit = {this.handleSubmit}>
                    <label htmlFor="customer_id">Customer</label>
                    <select id="customer_id" name="customerId" onChange={this.handleInputChange}>
                    <option disabled default value> -- select a customer -- </option>
                        {this.customerOptions()}
                    </select>

                    <label htmlFor="date">Start Date: </label>
                    <input type="date" id="date" name="date" value={this.state.startDate} onChange={this.handleChangeStart} required />

                    <label htmlFor="time">To Date: </label>
                    <input type="date" id="date" name="date" value={this.state.endDate} onChange={this.handleChangeEnd} required />

                    <div id="table-box-list">
                    <div className="row">
                         <div className="col-md-6 col-12">
                             <h6 className="font-weight-bolder">Number of days : {daysLeft}</h6>
                             <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
                         </div>
                         <div className="col-md-6 col-12">
                             <h6 className="font-weight-bold">Price per day : <span className="badge badge-info">Rs {this.state.price}</span></h6>                             
                             <h6 className="font-weight-bold">Total Price to be paid : <span className="text-primary">Rs {daysLeft*(this.state.price)}</span></h6>
                         </div>
                     </div>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        )
    }
    }


export default BookingForm;
