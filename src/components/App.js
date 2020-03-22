import React from 'react';
import './App.css';
import Ethernet from './Ethernet/Ethernet';

export default class App extends React.Component{

    state = {};

    dataToState = (data) => {
        alert(data);
    };

    render() {
        return (
            <div className="app">
            <Ethernet dataToState={this.dataToState}/>
            </div>
        )
    }
}
