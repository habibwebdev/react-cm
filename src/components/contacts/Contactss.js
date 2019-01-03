import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts : [
                {id: '1', name: 'John Doe', email: 'jdoe@me.co', phone: '03004112181'},
                {id: '2', name: 'Karen Smith', email: 'karen@me.co', phone: '03004112182'},
                {id: '3', name: 'Henry Hopkins', email: 'henry@me.co', phone: '03004112183'}
            ]
         }
    };
    deleteContact = (id) => {
        // console.log(id);
        const {contacts} = this.state;

        const newContact = contacts.filter(contact => contact.id !== id);
        this.setState({
            contacts: newContact
        });
    }
    render() {

        const {contacts} = this.state;
        // const contactInfo = contacts.map(contact => {
        //     return (
        //         <h1>{contact.name}</h1>
        //     );

        // });
        return (
            <React.Fragment>
                {/* {contactInfo} */}
                {/* {contacts.map(contact => <h1>{contact.name}</h1>)} */}
                {contacts.map(contact => {
                return (
                // <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone} />
                // <Contact key={contact.id} contact={contact} deleteContact={() => {this.deleteContact(contact.id)}} />
                <Contact key={contact.id} contact={contact} deleteContact={this.deleteContact.bind(this, contact.id)} />
                );
                        }

                    )
                }
            </React.Fragment>
         );
    }
}

export default Contacts;
