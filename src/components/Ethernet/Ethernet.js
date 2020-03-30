import React from 'react';
import './Ethernet.css';
import Ipform from '../Ipform/Ipform';
import Dnsform from "../Dnsform/Dnsform";

export default class Ethernet extends React.Component{

    render() {
        return (
            <div>
                <h2>Ethernet Settings</h2>
                <Ipform name={'eth_ip'} dataToState={this.props.dataToState}/>
                <Dnsform name={'eth_dns'} dataToState={this.props.dataToState}/>
            </div>
        )
    }
}