import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MyToast from '../../../components/Admin/MyToast';
import axios from 'axios';
import { Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import {  BsChevronBarRight, BsChevronRight, BsChevronLeft, BsChevronBarLeft } from "react-icons/bs";

class PolicyList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            policies: [],
            search: '',
            currentPage: 1,
            policiesPerPage: 5,
            sortDir: "asc",
        };
    }

    sortData = () => {
        setTimeout(() => {
            this.state.sortDir === "asc" ? this.setState({ sortDir: "desc" }) : this.setState({ sortDir: "asc" });
            this.findAllPolicies(this.state.currentPage);
        }, 500);
    };

    componentDidMount() {
        this.findAllPolicies(this.state.currentPage);
    }

    findAllPolicies(currentPage) {
        currentPage -= 1;
        axios.get("http://localhost:8080/api/test/policies/admin?pageNumber=" + currentPage + "&pageSize=" + this.state.policiesPerPage + "&sortBy=title&sortDir=" + this.state.sortDir)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    policies: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
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
        axios.get("http://localhost:8080/api/test/policies/search/" + this.state.search + "?page=" + currentPage + "&size=" + this.state.policiesPerPage)
            .then(response => response.data)
            .then((data) => {
                this.setState({
                    policies: data.content,
                    totalPages: data.totalPages,
                    totalElements: data.totalElements,
                    currentPage: data.number + 1
                });
            });
    };

    add = () => {
        return this.props.history.push("/admin/addpolicy");
    };

    render() {
        const { policies, currentPage, totalPages, search } = this.state;

        return (
            <div>
                <div className="home">
                    <div className="slide">
                        <div className="row">
                            <div className="col">
                                <div style={{ "display": this.state.show ? "block" : "none" }}>
                                    <MyToast show={this.state.show} message={"Policy Deleted Successfully."} type={"danger"} />
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-row">
                                            <div className="card-title">Policy Manage</div>
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
                                                        <th>Title</th>
                                                        <th>Type</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        policies.length === 0 ?
                                                            <tr align="center">
                                                                <td colSpan="3">No Policy Available.</td>
                                                            </tr> :
                                                            policies.map((policy) => (
                                                                <tr key={policy.id}>
                                                                    <td>{policy.confirm}</td>
                                                                    <td>{policy.title}</td>
                                                                    <td>{policy.type}</td>
                                                                    <td>{policy.description}</td>                                                                  
                                                                    <td>
                                                                        <ul className="list-inline m-0">
                                                                            <li className="list-inline-item">
                                                                                <Link to={"/admin/editpolicy/" + policy.id} className="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i className="fa fa-edit"></i></Link>
                                                                            </li>
                                                                            {/* <li className="list-inline-item">
                                                                                <button onClick={this.deletePolicy.bind(this, policy.id)} className="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"><i className="fa fa-trash"></i></button>
                                                                            </li> */}
                                                                        </ul>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                    }
                                                </tbody>
                                            </table>
                                            <div className="card-body">
                                                {policies.length > 0 ?
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
        policyObject: state.policy
    };
};

export default connect(mapStateToProps)(PolicyList);
