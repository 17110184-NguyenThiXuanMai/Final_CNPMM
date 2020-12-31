import React, { Component, useState } from 'react'
import { connect } from 'react-redux';
import { saveRoomType, fetchRoomType, updateRoomType } from '../../../services/index';
import { Card, Form, Button, Col, InputGroup, Image, Row } from 'react-bootstrap';
import MyToast from '../../../components/Admin/MyToast';
import axios from 'axios';
import { BsListUl, BsArrowCounterclockwise, BsPlusSquareFill } from "react-icons/bs";
import { storage } from "../../../firebase/firebase";
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import renderHTML from 'react-render-html';
// import _ from 'lodash';
import Editor from './Editor'

class CreateRoomType extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state = {
      types: [],
      bedTypes: [],
      pets: false,
      breakfast: false,
      television: false,
      bath: false,
      show: false,
      image: null,
      confirms: []
    };

    this.roomTypeChange = this.roomTypeChange.bind(this);
    this.submitRoomType = this.submitRoomType.bind(this);
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  initialState = {
    id: '', titleRoomType: '', bedType: '', type: '', size: '', pets: '', breakfast: '', television: '', bath: '', amount: '', adults: '', children: '', description: '', coverPhotoURL: '', price: '', confirm: ''
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
        storage.ref('images').child(image.name).getDownloadURL().then(coverPhotoURL => {
          console.log(coverPhotoURL);
          this.setState({ coverPhotoURL });
        })
      });
  }

  componentDidMount() {
    const roomTypeId = +this.props.match.params.id;
    if (roomTypeId) {
      this.findRoomTypeById(roomTypeId);
    }
    this.findAllTypes();
    this.findAllBeds();
    this.findAllConfirms();
  }


  findAllConfirms = () => {
    axios.get("http://localhost:8080/api/test/roomtypes/confirms")
    .then(response => response.data)
    .then((data) => {
      this.setState({
        confirms: [{ value: '', display: 'Select Confirm' }]
          .concat(data.map(confirm => {
            return { value: confirm, display: confirm }
          }))
      });
    });

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

  findAllBeds = () => {
    axios.get("http://localhost:8080/api/test/roomtypes/bedtypes")
      .then(response => response.data)
      .then((data) => {
        this.setState({
          bedTypes: [{ value: '', display: 'Select Bed Type' }]
            .concat(data.map(bedType => {
              return { value: bedType, display: bedType }
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
          bedType: roomType.bedType,
          type: roomType.type,
          size: roomType.size,
          amount: roomType.amount,
          adults: roomType.adults,
          children: roomType.children,
          pets: roomType.pets,
          breakfast: roomType.breakfast,
          television: roomType.television,
          bath: roomType.bath,
          description: roomType.description,
          coverPhotoURL: roomType.coverPhotoURL,
          confirm: roomType.confirm,
          price: roomType.price
        });
      }
    }, 1000);
  };

  resetRoomType = () => {
    this.setState(() => this.initialState);
  };

  submitRoomType = event => {
    event.preventDefault();

    const roomType = {
      titleRoomType: this.state.titleRoomType,
      bedType: this.state.bedType,
      type: this.state.type,
      size: this.state.size,
      amount: this.state.amount,
      adults: this.state.adults,
      children: this.state.children,
      pets: this.state.pets,
      breakfast: this.state.breakfast,
      television: this.state.television,
      bath: this.state.bath,
      price: this.state.price,
      description: this.state.description,
      confirm: this.state.confirm,
      coverPhotoURL: this.state.coverPhotoURL
    };

    this.props.saveRoomType(roomType);
    setTimeout(() => {
      if (this.props.savedRoomTypeObject.roomType != null) {
        this.setState({ "show": true, "method": "post" });
        setTimeout(() => this.setState({ "show": false }), 3000);
      } else {
        this.setState({ "show": false });
      }
    }, 2000);
    this.setState(this.initialState);
  };

  updateRoomType = event => {
    event.preventDefault();

    const roomType = {
      id: this.state.id,
      titleRoomType: this.state.titleRoomType,
      bedType: this.state.bedType,
      type: this.state.type,
      size: this.state.size,
      amount: this.state.amount,
      adults: this.state.adults,
      children: this.state.children,
      pets: this.state.pets,
      breakfast: this.state.breakfast,
      television: this.state.television,
      bath: this.state.bath,
      price: this.state.price,
      description: this.state.description,
      confirm: this.state.confirm,
      coverPhotoURL: this.state.coverPhotoURL
    };
    this.props.updateRoomType(roomType);
    setTimeout(() => {
      if (this.props.updatedRoomTypeObject.roomType != null) {
        this.setState({ "show": true, "method": "put" });
        setTimeout(() => this.setState({ "show": false }), 3000);
      } else {
        this.setState({ "show": false });
      }
    }, 2000);
  };

  roomTypeChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckPets = event => {
    this.setState({ pets: event.target.checked });
  }

  handleCheckBreakfast = event => {
    this.setState({ breakfast: event.target.checked });
  }

  handleCheckTelevision = event => {
    this.setState({ television: event.target.checked });
  }

  handleCheckBath = event => {
    this.setState({ bath: event.target.checked });
  }

  roomTypeList = () => {
    return this.props.history.push("/admin/roomtypes");
  };

  render() {
    const { titleRoomType, bedType, type, size, amount, adults, children, description, coverPhotoURL, price, confirm } = this.state;
    const style = {
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };
    return (
      <div className="container">
        <div style={{ "display": this.state.show ? "block" : "none" }}>
          <MyToast show={this.state.show} message={this.state.method === "put" ? "RoomType Updated Successfully." : "RoomType Saved Successfully."} type={"success"} />
        </div>
        <Card className={"card"}>
          <Card.Header>
            {this.state.id ? <BsPlusSquareFill /> : <BsPlusSquareFill />} {this.state.id ? " Update RoomType " : " Add New RoomType "}
          </Card.Header>
          <Form onReset={this.resetRoomType} onSubmit={this.state.id ? this.updateRoomType : this.submitRoomType} id="roomTypeFormId">
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTitleRoomType">
                  <Form.Label>Title Room Type</Form.Label>
                  <Form.Control required autoComplete="off"
                    type="test" name="titleRoomType"
                    value={titleRoomType} onChange={this.roomTypeChange}
                    className={"form-control"}
                    placeholder="Enter Title Room Type" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridSize">
                  <Form.Label>Size</Form.Label>
                  <Form.Control required autoComplete="off"
                    type="test" name="size"
                    value={size} onChange={this.roomTypeChange}
                    className={"form-control"}
                    placeholder="Enter Size" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridPrice">
                  <Form.Label>Price</Form.Label>
                  <Form.Control required autoComplete="off"
                    type="test" name="price"
                    value={price} onChange={this.roomTypeChange}
                    className={"form-control"}
                    placeholder="Enter RoomType Price" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Type</Form.Label>
                  <Form.Control required as="select"
                    form onChange={this.roomTypeChange}
                    name="type" value={type}
                    className={"form-control"}>
                    {this.state.types.map(type =>
                      <option key={type.value} value={type.value}>
                        {type.display}
                      </option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                  <Form.Label>Cover Photo URL</Form.Label>
                  <InputGroup>
                    <div style={style}>
                      {/* <br /> */}
                      <input type="file" onChange={this.handleChange} />
                      <button className="btn btn-white" onClick={this.handleUpload}>Upload</button>
                      <br />
                      <img src={this.state.coverPhotoURL || 'http://via.placeholder.com/400x300'} alt="Uploaded images" height="300" width="400" />
                    </div>
                    {/* <Form.Control required autoComplete="off"
                      type="test" name="coverPhotoURL"
                      value={coverPhotoURL} onChange={this.roomTypeChange}
                      className={"form-control"}
                      placeholder="Enter Room Type Cover Photo URL" /> */}
                    {/* <InputGroup.Append>
                      {this.state.coverPhotoURL !== '' && <Image src={this.state.coverPhotoURL} roundedRight width="40" height="38" />}
                    </InputGroup.Append> */}
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control required autoComplete="off"
                    type="test" name="amount"
                    value={amount} onChange={this.roomTypeChange}
                    className={"form-control"}
                    placeholder="Enter Amount" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridType">
                  <Form.Label>Bed Type</Form.Label>
                  <Form.Control required as="select"
                    form onChange={this.roomTypeChange}
                    name="bedType" value={bedType}
                    className={"form-control"}>
                    {this.state.bedTypes.map(bedType =>
                      <option key={bedType.value} value={bedType.value}>
                        {bedType.display}
                      </option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>Adults</Form.Label>
                  <InputGroup>
                    <Form.Control required autoComplete="off"
                      type="test" name="adults"
                      value={adults} onChange={this.roomTypeChange}
                      className={"form-control"}
                      placeholder="Enter Adults" />
                  </InputGroup>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridDescription">
                  <Form.Label>Children</Form.Label>
                  <Form.Control required autoComplete="off"
                    type="test" name="children"
                    value={children} onChange={this.roomTypeChange}
                    className={"form-control"}
                    placeholder="Enter Children" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridDescription">
                  <Form.Label>Description</Form.Label>
                  {/* <Form.Control required autoComplete="off"
                    type="test" name="description"
                    value={description} onChange={this.roomTypeChange}
                    className={"form-control"}
                    placeholder="Enter Description" /> */}
            <Editor />
                </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridConfirm">
                  <Form.Label>Confirm</Form.Label>
                  <Form.Control required as="select"
                    form onChange={this.roomTypeChange}
                    name="confirm" value={confirm}
                    className={"form-control"}>
                    {this.state.confirms.map(confirm =>
                      <option key={confirm.value} value={confirm.value}>
                        {confirm.display}
                      </option>
                    )}
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <div className="form-group">
                <div className="form-checkbox">
                  <label className="form-control-label" for="pets"> Pets </label>
                  <input type="checkbox" className="form-control-input"
                    value={this.state.pets}
                    onChange={this.handleCheckPets}
                    checked={this.state.pets}
                    name="pets" />
                </div>&nbsp;
                <div className="form-checkbox">
                  <label className="form-control-label" for="breakfast"> Breakfast </label>
                  <input type="checkbox" className="form-control-input"
                    value={this.state.breakfast}
                    onChange={this.handleCheckBreakfast}
                    checked={this.state.breakfast}
                    name="breakfast" />
                </div>&nbsp;
                <div className="form-checkbox">
                  <label className="form-control-label" for="featured"> Television </label>
                  <input type="checkbox" className="form-control-input"
                    value={this.state.television}
                    onChange={this.handleCheckTelevision}
                    checked={this.state.television}
                    name="featured" />
                </div>&nbsp;
                <div className="form-checkbox">
                  <label className="form-control-label" for="featured"> Bath </label>
                  <input type="checkbox" className="form-control-input"
                    value={this.state.bath}
                    onChange={this.handleCheckBath}
                    checked={this.state.bath}
                    name="bath" />
                </div>
              </div>
            </Card.Body>
            <Card.Footer>
              <div className="row float-right">
                <div className="form-group">
                  <button type="submit" variant="success" className="btn btn-light btn-round px-5"> {this.state.id ? "Update" : "Save"} </button>
                </div> &nbsp;
                <div className="form-group">
                  <button className="btn btn-light btn-round px-5" type="reset"><BsArrowCounterclockwise /> Reset</button>
                </div> &nbsp;
                <div className="form-group">
                  <button className="btn btn-light btn-round px-5" type="button" onClick={this.roomTypeList.bind()}> <BsListUl /> RoomType List</button>
                </div>
              </div>
            </Card.Footer>
          </Form>
        </Card>
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoomType);
