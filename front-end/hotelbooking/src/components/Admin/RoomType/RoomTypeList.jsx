import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MyToast from '../../../components/Admin/MyToast';
import axios from 'axios';
import { deleteRoomType } from '../../../services/index';
import { Card, Image, Button, InputGroup, FormControl } from 'react-bootstrap';
import {  BsChevronBarRight, BsChevronRight, BsChevronLeft, BsChevronBarLeft } from "react-icons/bs";
import NumberFormat from 'react-number-format';

class RoomTypeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            roomTypes: [],
            search: '',
            currentPage: 1,
            roomTypesPerPage: 5,
            sortDir: "asc",
        };
    }

    sortData = () => {
        setTimeout(() => {
            this.state.sortDir === "asc" ? this.setState({ sortDir: "desc" }) : this.setState({ sortDir: "asc" });
            this.findAllRoomTypes(this.state.currentPage);
        }, 500);
    };

    componentDidMount() {
        this.findAllRoomTypes(this.state.currentPage);
    }

    findAllRoomTypes(currentPage) {
        currentPage -= 1;
        axios.get("http://localhost:8080/api/test/roomtypes/admin?pageNumber=" + currentPage + "&pageSize=" + this.state.roomTypesPerPage + "&sortBy=price&sortDir=" + this.state.sortDir)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    roomTypes: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };

    deleteRoomType = (roomTypeId) => {
        this.props.deleteRoomType(roomTypeId);
        setTimeout(() => {
            if (this.props.roomTypeObject != null) {
                this.setState({ "show": true });
                setTimeout(() => this.setState({ "show": false }), 3000);
                this.findAllRoomTypes(this.state.currentPage);
            } else {
                this.setState({ "show": false });
            }
        }, 1000);
    };

    changePage = event => {
        let targetPage = parseInt(event.target.value);
        if (this.state.search) {
            this.searchData(targetPage);
        } else {
            this.findAllRoomTypes(targetPage);
        }
        this.setState({
            [event.target.name]: targetPage
        });
    };

    firstPage = () => {
        let firstPage = 1;
        if (this.state.currentPage > firstPage) {
            if (this.state.search) {
                this.searchData(firstPage);
            } else {
                this.findAllRoomTypes(firstPage);
            }
        }
    };

    prevPage = () => {
        let prevPage = 1;
        if (this.state.currentPage > prevPage) {
            if (this.state.search) {
                this.searchData(this.state.currentPage - prevPage);
            } else {
                this.findAllRoomTypes(this.state.currentPage - prevPage);
            }
        }
    };

    lastPage = () => {
        let condition = Math.ceil(this.state.totalElements / this.state.roomTypesPerPage);
        if (this.state.currentPage < condition) {
            if (this.state.search) {
                this.searchData(condition);
            } else {
                this.findAllRoomTypes(condition);
            }
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.roomTypesPerPage)) {
            if (this.state.search) {
                this.searchData(this.state.currentPage + 1);
            } else {
                this.findAllRoomTypes(this.state.currentPage + 1);
            }
        }
    };

    searchChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    cancelSearch = () => {
        this.setState({ "search": '' });
        this.findAllRoomTypes(this.state.currentPage);
    };

    searchData = (currentPage) => {
        currentPage -= 1;
        axios.get("http://localhost:8080/api/test/roomtypes/search/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.roomTypesPerPage)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    roomTypes: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };

    add = () => {
        return this.props.history.push("/admin/addroomtypes");
    };

    checkRoomType = (Code) => {
        if (Code === true) {
            return (
                <td className="text-center">
                    <div>True</div>
                </td>
            );
        } else {
            return (
                <td className="text-center">
                    <div>False</div>
                </td>
            );
        }
    };

    render() {
        const { roomTypes, currentPage, totalPages, search } = this.state;
        return (
            <div>
                <div className="home">
                    <div className="slide">
                        <div className="row">
                            <div className="col">
                                <div style={{ "display": this.state.show ? "block" : "none" }}>
                                    <MyToast show={this.state.show} message={"RoomType Deleted Successfully."} type={"danger"} />
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-row">
                                            <div className="card-title">Room Type Manage</div>
                                            <div className="form-inline ml-auto mb-3">
                                                <div className="md-form my-0">
                                                    <FormControl placeholder="Search" name="search" value={search}
                                                        className={"form-control-2"}
                                                        onChange={this.searchChange}
                                                    />
                                                </div>
                                                <div className="md-form my-0">
                                                    <button className="btn btn-outline-white btn-md my-0 ml-sm-2" type="button" onClick={this.searchData} >Search</button>
                                                </div>
                                                <button className="btn btn-outline-white btn-md my-0 ml-sm-2" type="button" onClick={this.cancelSearch} > Cancel Search</button>
                                            </div>
                                            <button className="book_button float-right" onClick={this.add.bind()}> ADD</button>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table my-3">
                                                <thead>
                                                    <tr>
                                                        <th>Confirm</th>
                                                        <th>Title Room Type</th>
                                                        <th>Bed Type</th>
                                                        <th>Type</th>
                                                        <th onClick={this.sortData}>Price <div className={this.state.sortDir === "asc" ? "arrow arrow-up" : "arrow arrow-down"}> </div></th>
                                                        <th>Size</th>
                                                        <th>Amount</th>
                                                        <th>Adults</th>
                                                        <th>Children</th>
                                                        <th>Description</th>
                                                        <th>Pets</th>
                                                        <th>Breakfast</th>
                                                        <th>Television</th>
                                                        <th>Bath</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        roomTypes.length === 0 ?
                                                            <tr align="center">
                                                                <td colSpan="12">No RoomTypes Available.</td>
                                                            </tr> :
                                                            roomTypes.map((roomType) => (
                                                                
                                                                <tr key={roomType.id}>
                                                                    <td>{roomType.confirm}</td>
                                                                    <td>
                                                                        <Image src={roomType.coverPhotoURL} rounded width="100" height="100" /> &nbsp; {roomType.titleRoomType}
                                                                    </td>
                                                                    <td>{roomType.bedType}</td>
                                                                    <td>{roomType.type}</td>                                            
                                                                    {/* <td>{roomType.price}</td> */}
                                                                    <td><NumberFormat thousandSeparator={true} prefix={'$'} displayType={'text'} value={roomType.price}/></td>
                                                                    <td>{roomType.amount}</td>
                                                                    <td>{roomType.adults}</td>
                                                                    <td>{roomType.children}</td>
                                                                    <td>{roomType.description}</td>
                                                                    <td> {this.checkRoomType(roomType.pets)}</td>
                                                                    <td> {this.checkRoomType(roomType.breakfast)}</td>
                                                                    <td> {this.checkRoomType(roomType.television)}</td>
                                                                    <td> {this.checkRoomType(roomType.bath)}</td>
                                                                    
                                                                    <td>
                                                                        <ul className="list-inline m-0">
                                                                            <li className="list-inline-item">
                                                                                <Link to={"/admin/editroomtype/" + roomType.id} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></Link>
                                                                            </li>
                                                                            {/* <li className="list-inline-item">
                                                                                <button onClick={this.deleteRoomType.bind(this, roomType.id)} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                                                            </li> */}
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="card-body">
                                                {roomTypes.length > 0 ?
                                                    <Card.Footer>
                                                        <div style={{ "float": "left" }}>
                                                            Showing Page {currentPage} of {totalPages}
                                                        </div>
                                                        <div style={{ "float": "right" }}>
                                                            <InputGroup size="sm">
                                                                <InputGroup.Prepend>
                                                                    <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                                                        onClick={this.firstPage}> <BsChevronBarLeft />
                                                                    First
                                                                    </Button>
                                                                    <Button type="button" variant="outline-info" disabled={currentPage === 1 ? true : false}
                                                                        onClick={this.prevPage}> <BsChevronLeft />
                                                                    Prev
                                                                    </Button>
                                                                </InputGroup.Prepend>
                                                                <FormControl className={"page-num"} name="currentPage" value={currentPage}
                                                                    onChange={this.changePage} />
                                                                <InputGroup.Append>
                                                                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                                                        onClick={this.nextPage}>
                                                                        Next <BsChevronRight />
                                                                    </Button>
                                                                    <Button type="button" variant="outline-info" disabled={currentPage === totalPages ? true : false}
                                                                        onClick={this.lastPage}> <BsChevronBarRight />
                                                                        Last
                                                                    </Button>
                                                                </InputGroup.Append>
                                                            </InputGroup>
                                                        </div>
                                                    </Card.Footer> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        roomTypeObject: state.roomType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteRoomType: (roomTypeId) => dispatch(deleteRoomType(roomTypeId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomTypeList);
