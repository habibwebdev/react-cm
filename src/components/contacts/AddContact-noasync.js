import React, { Component } from 'react';
import { Consumer } from "../../context";
// import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios'

class AddContact extends Component {
    // Example of controlled component
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
     };
    onChange = (e) => this.setState({[e.target.name] : e.target.value});
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        // console.log(this.state);

        const {name, email, phone} = this.state;

        // Check for errors
        if (name === '') {
            this.setState({errors: {name: 'Name is required.'}});
            return;
        }
        if (email === '') {
            this.setState({errors: {email: 'Email is required.'}});
            return;
        }
        if (phone === '') {
            this.setState({errors: {phone: 'Phone is required.'}});
            return;
        }

        const newContact = {
            // id: uuid(), we dont need to generate the id so because we are posting to jsonplaceholder.com and they do put auto-generated id ...
            name,
            email,
            phone,
        };
        axios.post("https://jsonplaceholder.typicode.com/users", newContact)
          .then(res => dispatch({ type: "ADD_CONTACT", payload: res.data}));

        // clear state
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        // redirect
        this.props.history.push('/');
    }
    render() {
        const {name, email, phone, errors} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header font-weight-bold">Add Contact</div>
                            <div className="card-body">
                                {/* <form onSubmit={this.onSubmit.bind(this, dispatch)}> */}
                                <form onSubmit={(e) => {this.onSubmit(dispatch, e)}}>
                                    <TextInputGroup label="Name" name="name" value={name} placeholder="Enter Name..." onChange={this.onChange} error={errors.name} />
                                    <TextInputGroup label="Email" name="email" type="email" value={email} placeholder="Enter Email..." onChange={this.onChange} error={errors.email} />
                                    <TextInputGroup label="Phone" name="phone" value={phone} placeholder="Enter Phone..." onChange={this.onChange} error={errors.phone} />

                                    <button type="submit" className="btn btn-success btn-block col-md-4 mx-auto">Add Contact</button>
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
         );
    }
}

export default AddContact;
