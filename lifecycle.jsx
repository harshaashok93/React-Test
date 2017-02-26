import React from 'react';


class MyApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: 0
        }

        this.setNewNumber = this.setNewNumber.bind(this);
    };

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    };

    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}> Increment </button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        )
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log("component did mount");
    }

    componentWillReceiveProps(newProps) {
        console.log('component will receive props.');
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }

    componentWillUpdate(newProps, nextState) {
        console.log('Component will update');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update');
    }

    componentWillUnmount() {
        console.log('component wll unmount');
    }

    render() {
        return (
            <div>
                <h4> {this.props.myNumber} </h4>
            </div>
        )
    }
}

export default MyApp;