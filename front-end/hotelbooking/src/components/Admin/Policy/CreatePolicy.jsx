import React, { Component} from 'react'
import { connect } from 'react-redux';
import { savePolicy, fetchPolicy, updatePolicy } from '../../../services/index';
import { Card, Form, Col, InputGroup } from 'react-bootstrap';
import MyToast from '../../../components/Admin/MyToast';
import axios from 'axios';
import { BsListUl, BsArrowCounterclockwise, BsPlusSquareFill } from "react-icons/bs";

class CreatePolicy extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.state = {
      types: [],
      // confirms: []
    };
    this.policyChange = this.policyChange.bind(this);
    this.submitPolicy = this.submitPolicy.bind(this);
  }

  initialState = {
    id: '', type: '', title: '', description: ''
  };

  componentDidMount() {
    const policyId = +this.props.match.params.id;
    if (policyId) {
      this.findPolicyById(policyId);
    }
    this.findAllTypes();
    // this.findAllConfirms();
  }

  // findAllConfirms = () => {
  //   axios.get("http://localhost:8080/api/test/policies/confirms")
  //   .then(response => response.data)
  //   .then((data) => {
  //     this.setState({
  //       confirms: [{ value: '', display: 'Select Confirm' }]
  //         .concat(data.map(confirm => {
  //           return { value: confirm, display: confirm }
  //         }))
  //     });
  //   });
  // }

  findAllTypes = () => {
    axios.get("http://localhost:8080/api/test/policies/types")
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

  findPolicyById = (policyId) => {
    this.props.fetchPolicy(policyId);
    setTimeout(() => {
      let policy = this.props.policyObject.policy;
      if (policy != null) {
        this.setState({
          id: policy.id,
          title: policy.title,
          type: policy.type,
          description: policy.description,
          // confirm: policy.confirm
        });
      }
    }, 1000);
  };

  resetPolicy = () => {
    this.setState(() => this.initialState);
  };

  submitPolicy = event => {
    event.preventDefault();

    const policy = {
      title: this.state.title,
      type: this.state.type,
      description: this.state.description,
      // confirm: this.state.confirm,
    };

    this.props.savePolicy(policy);
    setTimeout(() => {
      if (this.props.savedPolicyObject.policy != null) {
        this.setState({ "show": true, "method": "post" });
        setTimeout(() => this.setState({ "show": false }), 3000);
      } else {
        this.setState({ "show": false });
      }
    }, 2000);
    this.setState(this.initialState);
  };

  updatePolicy = event => {
    event.preventDefault();

    const policy = {
      id: this.state.id,
      title: this.state.title,
      type: this.state.type,
      description: this.state.description,
      // confirm: this.state.confirm
    };
    this.props.updatePolicy(policy);
    setTimeout(() => {
      if (this.props.updatedPolicyObject.policy != null) {
        this.setState({ "show": true, "method": "put" });
        setTimeout(() => this.setState({ "show": false }), 3000);
      } else {
        this.setState({ "show": false });
      }
    }, 2000);
  };

  policyChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  policyList = () => {
    return this.props.history.push("/admin/policy");
  };

  render() {
    const { title, type, description, confirm } = this.state;
    return (
      <div className="home">
      <div className="container">
        <div style={{ "display": this.state.show ? "block" : "none" }}>
          <MyToast show={this.state.show} message={this.state.method === "put" ? "Policy Updated Successfully." : "Policy Saved Successfully."} type={"success"} />
        </div>
        <Card className={"card"}>
          <Card.Header>
            {this.state.id ? <BsPlusSquareFill /> : <BsPlusSquareFill />} {this.state.id ? " Update Policy " : " Add New Policy "}
          </Card.Header>
          <Form onReset={this.resetPolicy} onSubmit={this.state.id ? this.updatePolicy : this.submitPolicy} id="policyFormId">
            <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control required autoComplete="off"
                    type="test" name="title"
                    value={title} onChange={this.policyChange}
                    className={"form-control"}
                    placeholder="Enter Title" />
                </Form.Group>
                <Form.Group>
                <Form.Label>Type</Form.Label>
                <Form.Control required as="select"
                    form onChange={this.policyChange}
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
              <Form.Group as={Col} controlId="formGridDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control required autoComplete="off"
                    type="test" name="description"
                    value={description} onChange={this.policyChange}
                    className={"form-control"}
                    placeholder="Enter Description" />
                </Form.Group>
              </Form.Row>
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
                  <button className="btn btn-light btn-round px-5" type="button" onClick={this.policyList.bind()}> <BsListUl /> Policy List</button>
                </div>
              </div>
            </Card.Footer>
          </Form>
        </Card>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    savedPolicyObject: state.policy,
    policyObject: state.policy,
    updatedPolicyObject: state.policy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    savePolicy: (policy) => dispatch(savePolicy(policy)),
    fetchPolicy: (policyId) => dispatch(fetchPolicy(policyId)),
    updatePolicy: (policy) => dispatch(updatePolicy(policy))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePolicy);
