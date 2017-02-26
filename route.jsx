import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, browserHistory, IndexRoute} from 'react-router';


export class Home extends React.Component {
    render () {
        return (
            <div>
                <h1>Home ...</h1>
            </div>
        )
    }
}

export class About extends React.Component {
    render () {
        return (
            <div>
                <h1>About ...</h1>
            </div>
        )
    }
}

export class Contact extends React.Component {
    render () {
        return (
            <div>
                <h1>Contact Us . . .</h1>
            </div>
        )
    }
}
