import React from 'react';
import './App.css';
import Ethernet from './Ethernet/Ethernet';
import Wireless from  './Wireless/Wireless';

export default class App extends React.Component{


    dataToState = (id, value) => {
        console.log(id, value);
    };

    render() {
        return (
            <div className="app">
            <Ethernet dataToState={this.dataToState}/>
            <Wireless dataToState={this.dataToState}/>
            </div>
        )
    }

}
