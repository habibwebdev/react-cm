import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                // contacts: [...state.contacts, action.payload]
                contacts: [action.payload, ...state.contacts]
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            { id: '1', name: 'John Doe', email: 'jdoe@me.co', phone: '03004112181' },
            { id: '2', name: 'Karen Smith', email: 'karen@me.co', phone: '03004112182' },
            { id: '3', name: 'Henry Hopkins', email: 'henry@me.co', phone: '03004112183' }
        ],
        dispatch : action =>  this.setState(state => reducer(state, action))
     }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
         );
    }
}

export const Consumer = Context.Consumer;
