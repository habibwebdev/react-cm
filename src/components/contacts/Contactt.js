import React, { Component } from 'react';
// For Typechecking we ll import as fellows
import PropTypes from 'prop-types';
import './contact.css';

class Contact extends Component {
    // typechecking can be done here inside as fellows
    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     email: PropTypes.string.isRequired,
    //     phone: PropTypes.string.isRequired,
    // }
    static propTypes = {
        contact: PropTypes.object.isRequired,
        deleteContact: PropTypes.func.isRequired,
    }
    state = {
      showContactInfo: false
     };
  handleDelete = (e) => {
    // console.log('hello');
    // console.log(this.state);
    this.props.deleteContact();
  };
    handleClick = (e) =>{
      // console.log('hello');
      // console.log(this.state);
      this.setState({
        showContactInfo: !this.state.showContactInfo
      });
    };
    render() {
      const {showContactInfo} = this.state;
      const {name, email, phone} = this.props.contact;
        // const {name, email, phone} = this.props;
        // const {contact} = this.props;
        return <div className="card card-body mb-3 shadow-sm">
            <h4 className="m-0">{name}{' '}
              <i onClick={this.handleClick} className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>
              <i onClick={this.handleDelete} className="fas fa-times text-danger float-right" style={{cursor: 'pointer'}}></i>
            </h4>
            {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">
                Email: {email}
              </li>
              <li className="list-group-item">
                Phone: {phone}
              </li>
            </ul>
            ) : null}

            {/* <h4>Name: {contact.name}</h4>
            <ul className="list-group">
              <li className="list-group-item">
                Email: {contact.email}
              </li>
              <li className="list-group-item">
                Phone: {contact.phone}
              </li>
            </ul> */}
          </div>;
    }
}

// typechecking can be done here outside the class as fellows
// Contact.propTypes = {
//     name: PropTypes.string.isRequired,
//     email: PropTypes.string.isRequired,
//     phone: PropTypes.string.isRequired,
// };

export default Contact;
