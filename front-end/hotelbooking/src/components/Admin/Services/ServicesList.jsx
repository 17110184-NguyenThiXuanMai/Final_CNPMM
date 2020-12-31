import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteService } from '../../../services/index';
import { Card, Button, InputGroup, FormControl, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MyToast from '../MyToast';
import axios from 'axios';
import { BsChevronBarRight, BsChevronRight, BsChevronLeft, BsChevronBarLeft } from "react-icons/bs";

class ServicesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [],
            search: '',
            currentPage: 1,
            policiesPerPage: 5,
            sortDir: "asc",
        };
    }

    sortData = () => {
        setTimeout(() => {
            this.state.sortDir === "asc" ? this.setState({ sortDir: "desc" }) : this.setState({ sortDir: "asc" });
            this.findAllServices(this.state.currentPage);
        }, 500);
    };

    componentDidMount() {
        this.findAllServices(this.state.currentPage);
        // console.log(this.props.match.params.type);
        // const typeParam = this.props.match.params.type;
        // if(this.props.match.params.type==="all"){
        //     this.setState({
        //         listServices:this.state.services
        //     })
        // }else{
        //     this.setState({
        //         listServices:this.state.services.filter(item=>item.type ===typeParam)
        //     })
        // }
    }

    findAllServices(currentPage) {
        currentPage -= 1;
        axios.get("http://localhost:8080/api/test/services?pageNumber=" + currentPage + "&pageSize=" + this.state.policiesPerPage + "&sortBy=title&sortDir=" + this.state.sortDir)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    services: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };

    deleteService = (serviceId) => {
        this.props.deleteService(serviceId);
        setTimeout(() => {
            if (this.props.serviceObject != null) {
                this.setState({ "show": true });
                setTimeout(() => this.setState({ "show": false }), 3000);
                this.findAllPolicies(this.state.currentPage);
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
            this.findAllPolicies(targetPage);
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
                this.findAllPolicies(firstPage);
            }
        }
    };

    prevPage = () => {
        let prevPage = 1;
        if (this.state.currentPage > prevPage) {
            if (this.state.search) {
                this.searchData(this.state.currentPage - prevPage);
            } else {
                this.findAllPolicies(this.state.currentPage - prevPage);
            }
        }
    };

    lastPage = () => {
        let condition = Math.ceil(this.state.totalElements / this.state.policiesPerPage);
        if (this.state.currentPage < condition) {
            if (this.state.search) {
                this.searchData(condition);
            } else {
                this.findAllPolicies(condition);
            }
        }
    };

    nextPage = () => {
        if (this.state.currentPage < Math.ceil(this.state.totalElements / this.state.policiesPerPage)) {
            if (this.state.search) {
                this.searchData(this.state.currentPage + 1);
            } else {
                this.findAllPolicies(this.state.currentPage + 1);
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
        this.findAllPolicies(this.state.currentPage);
    };

    searchData = (currentPage) => {
        currentPage -= 1;
        axios.get("http://localhost:8080/api/test/services/search/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.policiesPerPage)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    services: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };

    add = () => {
        return this.props.history.push("/admin/addservices");
    };

    checkService = (Code) => {
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
        const { services, currentPage, totalPages, search } = this.state;
        // const typeParam = this.props.match.params.type;
        return (
            <div>
                <div className="home">
                    <div className="slide">
                        <div className="row">
                            <div className="col">
                                <div style={{ "display": this.state.show ? "block" : "none" }}>
                                    <MyToast show={this.state.show} message={"Service Deleted Successfully."} type={"danger"} />
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-row">
                                            <div className="card-title">Service Manage</div>
                                            <div className="form-inline ml-auto mb-3">
                                                <div className="md-form my-0">
                                                    <FormControl placeholder="Search" name="search" value={search}
                                                        className={"form-control"}
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
                                                <thead className="">
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Type</th>
                                                        <th>Image</th>
                                                        <th></th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        services.length === 0 ?
                                                            <tr align="center">
                                                                <td colSpan="5">No Policies Available.</td>
                                                            </tr> :
                                                            // services.filter(item => item.type === typeParam).map((service) => (
                                                                services.map((service) => (
                                                                //  {
                                                                //     if (service.confirm == `Disable`)
                                                                //     {
                                                                <tr key={service.id}>
                                                                    <td>{service.title}</td>
                                                                    <td>{service.type}</td>
                                                                    <td colSpan="2">
                                                                        <Image src={service.url} rounded width="100" height="100" />
                                                                    </td>
                                                                    <td>{service.description}</td>
                                                                    <td>
                                                                        {/* <ButtonGroup>
                                                                            <Link to={"admin/editpolicy/"+service.id} className="btn btn-sm btn-outline-primary"><BsPencilSquare /></Link>{' '}
                                                                            <Button size="sm" variant="outline-danger" onClick={this.deleteService.bind(this, service.id)}><BsFillTrashFill /></Button>
                                                                        </ButtonGroup> */}
                                                                        <ul className="list-inline m-0">
                                                                            <li className="list-inline-item">
                                                                                <Link to={"/admin/editservices/" + service.id} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></Link>
                                                                            </li>
                                                                            <li className="list-inline-item">
                                                                                <button onClick={this.deleteService.bind(this, service.id)} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                                                            </li>
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                                    // }}
                                                                )
                                                                    )
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="card-body">
                                            {services.length > 0 ?
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
                                                            <FormControl className={"page-num bg-dark"} name="currentPage" value={currentPage}
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
        );
    }
}

const mapStateToProps = state => {
    return {
        serviceObject: state.service
    };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteService: (serviceId) => dispatch(deleteService(serviceId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);