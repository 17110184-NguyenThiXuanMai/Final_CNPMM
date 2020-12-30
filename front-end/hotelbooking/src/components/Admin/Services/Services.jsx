import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveService, fetchService, updateService } from '../../../services/index';
import { Card, Form, Col} from 'react-bootstrap';
import MyToast from '../MyToast';
import axios from 'axios';
import { BsListUl, BsArrowCounterclockwise, BsPlusSquareFill, BsFillCaretDownFill } from "react-icons/bs";
import { storage } from "../../../firebase/firebase";

class Services extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state = {
            types: [],
            show: false
        };
        this.serviceChange = this.serviceChange.bind(this);
        this.submitService = this.submitService.bind(this);
        this.handleChange = this
        .handleChange
        .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
    }

    initialState = {
        id: '', title: '', type: '', description: '', url: ''
    };

    componentDidMount() {
        const serviceId = + this.props.match.params.id;
        if (serviceId) {
            this.findById(serviceId);
        }
        this.findAllTypes();
    }

    findById = (serviceId) => {
        this.props.fetchService(serviceId);
        setTimeout(() => {
            let service = this.props.serviceObject.service;
            if (service != null) {
                this.setState({
                    id: service.id,
                    title: service.title,
                    type: service.type,
                    url: service.url,
                    description: service.description,
                });
            }
        }, 1000);
    };

    findAllTypes = () => {
        axios.get("http://localhost:8080/api/test/services/types")
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

    resetService = () => {
        this.setState(() => this.initialState);
    };

    // submitService = event => {
    //     event.preventDefault();

    //     const service = {
    //         title: this.state.title,  
    //         type: this.state.type,      
    //         description: this.state.description,
    //     };

    //     this.props.saveService(service,()=>{
    //         // console.log(this.props.savedServiceObject.service); 
    //         this.props.history.push(`/admin/policy/type=${this.state.type}`);
    //         if(this.props.savedServiceObject.service != null) {
    //             console.log('worked');
    //         this.setState({"show":true, "method":"post"},()=>{
    //                 this.setState({"show":false});
    //             });
    //             // setTimeout(() => this.setState({"show":false}), 3000);
    //         } else {
    //             this.setState({"show":false},()=>{
    //                 // this.props.history.push(`/admin/policy/type=${this.state.type}`)
    //             });

    //         }
    //         // this.props.history.push(`/admin/policy/type=${this.state.type}`)
    //         console.log(this.props.savedServiceObject.service); 
    //     });
    //     // this.props.saveService(service);
    //     // console.log(service); 
    //     // setTimeout(() => {
    //     //     if(this.props.savedServiceObject.service != null) {
    //     //         this.setState({"show":true, "method":"post"});
    //     //         setTimeout(() => this.setState({"show":false}), 3000);
    //     //     } else {
    //     //         this.setState({"show":false});
    //     //     }

    //     // }, 2000); 
    //     // this.setState(this.initialState, () => { 
    //     // this.props.history.push(`/admin/policy/type=${this.state.type}`)})
    //     this.setState(this.initialState)
    //     this.props.history.push(`/admin/policy/type=${this.state.type}`)
    // };


    submitService = event => {
        event.preventDefault();

        const service = {
            title: this.state.title,
            type: this.state.type,
            url: this.state.url,
            description: this.state.description,
        };
        this.props.saveService(service);
        setTimeout(() => {
            if (this.props.savedServiceObject.service != null) {
                this.setState({ "show": true, "method": "post" });
                setTimeout(() => this.setState({ "show": false }), 3000);
            } else {
                this.setState({ "show": false });
            }
        }, 2000);
        console.log(this.state.type)
        this.setState(this.initialState);
       // this.props.history.push(`/admin/policy/type=${this.state.type}`)
    };

    updateService = event => {
        event.preventDefault();

        const service = {
            id: this.state.id,
            title: this.state.title,
            type: this.state.type,
            url: this.state.url,
            description: this.state.description,
        };
        this.props.updateService(service);
        setTimeout(() => {
            if (this.props.updatedServiceObject.service != null) {
                this.setState({ "show": true, "method": "put" });
                setTimeout(() => this.setState({ "show": false }), 3000);
            } else {
                this.setState({ "show": false });
            }
        }, 2000);

        this.setState(this.initialState);
    };

    serviceChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    serviceList = () => {
        // return this.props.history.push(`/admin/policy/type=${this.state.type}`);
        //  console.log(this.state.type);
        return this.props.history.push(`/admin/serviceslist`)
    };

    handleChange = e => {
        if (e.target.files[0]) {
          const image = e.target.files[0];
          this.setState(() => ({ image }));
        }
      }
    
      handleUpload = (event) => {
        event.preventDefault();
        
        const { image } = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
          (snapshot) => {
            // progrss function ....
            // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            // this.setState({ progress });
          },
          (error) => {
            // error function ....
            console.log(error);
          },
          () => {
            // complete function ....
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({ url });
            })
          });
      }

    render() {
        const { title, description, type, url } = this.state;
        const style = {
            height: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          };
        return (
            <div className="home">
                <div className="slide">
                    <div className="row">
                        <div className="col">
                            <div className="container">
                                <div style={{ "display": this.state.show ? "block" : "none" }}>
                                    <MyToast show={this.state.show} message={this.state.method === "put" ? "Service Updated Successfully." : "Service Saved Successfully."} type={"success"} />
                                </div>
                                <Card className={"card"}>
                                    <Card.Header>
                                        {this.state.id ? <BsPlusSquareFill /> : <BsPlusSquareFill />} {this.state.id ? " Update Service" : " Add New Service"}
                                    </Card.Header>
                                    <Form onReset={this.resetService} onSubmit={this.state.id ? this.updateService : this.submitService} id="serviceFormId">
                                        <Card.Body>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="formGridTitle">
                                                    <Form.Label>Title</Form.Label>
                                                    <Form.Control required autoComplete="off"
                                                        type="test" name="title"
                                                        value={title} onChange={this.serviceChange}
                                                        className={"form-control"}
                                                        placeholder="Enter Title Service" />
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridType">
                                                    <Form.Label>Type</Form.Label>
                                                    <Form.Control required as="select"
                                                        custom onChange={this.serviceChange}
                                                        name="type" value={type}
                                                        className={"form-control"}>
                                                        {this.state.types.map(type =>
                                                            <option key={type.value} value={type.value}>
                                                                {type.display}
                                                            </option>
                                                        )}
                                                    </Form.Control>
                                                </Form.Group>
                                                <Form.Group as={Col} controlId="formGridDescription">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control required autoComplete="off"
                                                        type="test" name="description"
                                                        value={description} onChange={this.serviceChange}
                                                        className={"form-control"}
                                                        placeholder="Enter Description" />
                                                </Form.Group>
                                            </Form.Row> 
                                            <Form.Row> 
                                                <Form.Group as={Col} controlId="formGridUrl">
                                                <div style={style}>
                                                    {/* <progress value={this.state.progress} max="100" /> */}
                                                    <br />
                                                    <input type="file" onChange={this.handleChange} />
                                                    <button className="btn btn-white" onClick={this.handleUpload}>Upload</button>
                                                    <br />
                                                    <img src={this.state.url || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
                                                    </div>
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                        <Card.Footer>
                                            <div className="row float-right">
                                                <div className="form-group">
                                                    <button type="submit" variant="success" className="btn btn-light btn-round px-5"> {this.state.id ? "Update" : "Save"} </button>
                                                </div> &nbsp;
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-light btn-round px-5"><BsArrowCounterclockwise /> Reset</button>
                                                </div> &nbsp;
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-light btn-round px-5" onClick={this.serviceList.bind()}> <BsListUl /> RoomType List</button>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Form>
                                </Card>
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
        savedServiceObject: state.service,
        serviceObject: state.service,
        updatedServiceObject: state.service
    };
};

const mapDispatchToProps = dispatch => {
    return {
        saveService: (service) => dispatch(saveService(service)),
        fetchService: (serviceId) => dispatch(fetchService(serviceId)),
        updateService: (service) => dispatch(updateService(service))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Services);