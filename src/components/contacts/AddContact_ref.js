import React, { Component } from 'react';

class AddContact extends Component {
    // example of uncontrollered component
    constructor (props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    static defaultProps = {
        name: 'Fred Smith',
        email: 'fsmith@mail.co',
        phone: '333-333-3333'
    }

    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.nameInput.current.value,
            email: this.emailInput.current.value,
            phone: this.phoneInput.current.value,
        };
        console.log(contact);
    }
    render() {
        const {name, email, phone} = this.props;
        return (
            <div className="card mb-3">
                <div className="card-header font-weight-bold">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label htmlFor="">Name</label>
                          <input type="text" name="name" className="form-control form-control-lg" defaultValue={name} ref={this.nameInput} placeholder="Enter Name..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" className="form-control form-control-lg" defaultValue={email} ref={this.emailInput} placeholder="Enter Email..." />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone</label>
                            <input type="text" name="phone" className="form-control form-control-lg" defaultValue={phone} ref={this.phoneInput} placeholder="Enter Phone..." />
                        </div>
                        <button type="submit" className="btn btn-success btn-block col-md-4 mx-auto">Add Contact</button>
                    </form>
                </div>
            </div>
         );
    }
}

export default AddContact;
