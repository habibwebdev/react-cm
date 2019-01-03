import React, { Component } from 'react';
import { Consumer } from "../../context";
import uuid from 'uuid';

class AddContact extends Component {
    // Example of controlled component
    state = {
        name: '',
        email: '',
        phone: ''
     };
    onChange = (e) => this.setState({[e.target.name] : e.target.value});
    onSubmit = (dispatch, e) => {
        e.preventDefault();
        // console.log(this.state);

        const {name, email, phone} = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        };
        dispatch({
            type: 'ADD_CONTACT',
            payload: newContact
        });
        this.setState({
            name: '',
            email: '',
            phone: '',
        });
    }
    render() {
        const {name, email, phone} = this.state;
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
                                    <div className="form-group">
                                        <label htmlFor="">Name</label>
                                        <input onChange={this.onChange} type="text" name="name" className="form-control form-control-lg" value={name} placeholder="Enter Name..." />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input onChange={this.onChange} type="email" name="email" className="form-control form-control-lg" value={email} placeholder="Enter Email..." />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Phone</label>
                                        <input onChange={this.onChange} type="text" name="phone" className="form-control form-control-lg" value={phone} placeholder="Enter Phone..." />
                                    </div>
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
