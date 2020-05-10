import React from 'react';
import './Ethernet.css';
import Ipform from '../Ipform/Ipform';
import Dnsform from "../Dnsform/Dnsform";

export default class Ethernet extends React.Component{


    render() {
        return (
            <div className={'work_place-ethernet'}>
                <h2>Ethernet Settings</h2>
                <Ipform name={'eth_ip'}
                        wifi_mod_ip={'off'}
                        dataInputMode={this.props.dataInputMode}
                        dataToState={this.props.dataToState}/>
                <Dnsform name={'eth_dns'}
                         wifi_mod_dns={'off'}
                         dataInputMode={this.props.dataInputMode}
                         dataToState={this.props.dataToState}/>
            </div>
        )
    }
}