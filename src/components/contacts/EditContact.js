import React, { Component } from 'react';
import { Consumer } from "../../context";
// import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios'

class EditContact extends Component {
  // Example of controlled component
  state = {
    name: "",
    email: "",
    phone: "",
    errors: {}
  };

  //  asyncronous http request with await example
  async componentDidMount() {
      const {id} = this.props.match.params;
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      const contact = res.data;

      this.setState({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
      });
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  //  asyncronous http request with await example
  onSubmit = async (dispatch, e) => {
    e.preventDefault();
    // console.log(this.state);

    const { name, email, phone } = this.state;

    // Check for errors
    if (name === "") {
      this.setState({ errors: { name: "Name is required." } });
      return;
    }
    if (email === "") {
      this.setState({ errors: { email: "Email is required." } });
      return;
    }
    if (phone === "") {
      this.setState({ errors: { phone: "Phone is required." } });
      return;
    }

      const updateContact = {
          name,
          email,
          phone
      };

    const {id} = this.props.match.params;
      const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, updateContact);

      dispatch({type: 'UPDATE_CONTACT', payload: res.data})

    // clear state
    this.setState({
      name: "",
      email: "",
      phone: "",
      errors: {}
    });

    // redirect
    this.props.history.push("/");
  };
  render() {
    const { name, email, phone, errors } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header font-weight-bold">Edit Contact</div>
              <div className="card-body">
                {/* <form onSubmit={this.onSubmit.bind(this, dispatch)}> */}
                <form
                  onSubmit={e => {
                    this.onSubmit(dispatch, e);
                  }}
                >
                  <TextInputGroup
                    label="Name"
                    name="name"
                    value={name}
                    placeholder="Enter Name..."
                    onChange={this.onChange}
                    error={errors.name}
                  />
                  <TextInputGroup
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="Enter Email..."
                    onChange={this.onChange}
                    error={errors.email}
                  />
                  <TextInputGroup
                    label="Phone"
                    name="phone"
                    value={phone}
                    placeholder="Enter Phone..."
                    onChange={this.onChange}
                    error={errors.phone}
                  />

                  <button
                    type="submit"
                    className="btn btn-success btn-block col-md-4 mx-auto"
                  >
                    Update Contact
                  </button>
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default EditContact;
