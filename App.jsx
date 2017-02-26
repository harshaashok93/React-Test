import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: []
        }

        this.setStateHandler = this.setStateHandler.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
        this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
    };

    setStateHandler() {
        var item = "setState...";
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({data: myArray})
    };

    forceUpdateHandler() {
        this.forceUpdate();
    };

    findDomNodeHandler() {
        var div = document.getElementById("myDiv");
        ReactDOM.findDOMNode(myDiv).style.color = 'green';
    };

    render() {
        return (
            <div>
                <button onClick = {this.setStateHandler}> SET STATE </button>
                <button onClick = {this.forceUpdateHandler}> FORCE UPDATE </button>
                <button onClick = {this.findDomNodeHandler}> FIND NODE </button>
                <div id = "myDiv">NODE</div>
                <h4> Random number: {Math.random()}</h4>
                <h4> {this.state.data} </h4>
            </div>
        );
    }
}

export default App;
