import React, { Component } from 'react';
// For Typechecking we ll import as fellows
import PropTypes from 'prop-types';
import { Consumer } from "../../context";
import './contact.css';

class Contact extends Component {

    static propTypes = {
        contact: PropTypes.object.isRequired,

    }
    state = {
      showContactInfo: false
     };
  handleDelete = (id, dispatch) => {
    // console.log('hello');
    // console.log(this.state);
    dispatch({type: 'DELETE_CONTACT', payload: id});

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
      const {id, name, email, phone} = this.props.contact;

        return (
          <Consumer>
            {value => {
              const {dispatch} = value;
              return (
                <div className="card card-body mb-3 shadow-sm">
                  <h4 className="m-0">{name}{' '}
                    <i onClick={this.handleClick} className="fas fa-sort-down" style={{ cursor: 'pointer' }}></i>
                    {/* <i onClick={this.handleDelete.bind(this, id, dispatch)} className="fas fa-times text-danger float-right" style={{ cursor: 'pointer' }}></i> */}
                    <i onClick={() => {this.handleDelete(id, dispatch)}} className="fas fa-times text-danger float-right" style={{ cursor: 'pointer' }}></i>
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


                </div>
              );
            }}
          </Consumer>

        );
    }
}

export default Contact;
