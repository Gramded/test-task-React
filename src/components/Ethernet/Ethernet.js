import React from 'react';
import './Ethernet.css';
import Ipform from '../Ipform/Ipform';

export default class Ethernet extends React.Component{

    render() {
        return (
            <div>
                <h2>Ethernet Settings</h2>
                <Ipform dataToState={this.props.dataToState}/>
            </div>
        )
    }
}