import React, { Component } from 'react';

class Test extends Component {
    state = {
        title: '',
        body: '',
     }
    componentDidMount() {
        // console.log('component did mount');
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            // .then(data => console.log(data))
            .then(data => this.setState({
                title: data.title,
                body: data.body,
            }))
    }
    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    // UNSAFE_componentWillMount() {
    //     console.log("component will mount");
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log("component did update");
    // }
    //WARNING! To be deprecated in React v17. Use componentDidUpdate instead.
    // UNSAFE_componentWillUpdate(nextProps, nextState) {
    //     console.log("component will update");
    // }
    //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
    // UNSAFE_componentWillReceiveProps(nextProps) {
    //     console.log("component will recieve props");
    // }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     return null;
    // }
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log("getSnapshotBeforeUpdate");
    // }
    render() {
        const {title, body} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>
         );
    }
}

export default Test;
