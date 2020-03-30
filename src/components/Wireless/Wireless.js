import React from 'react';
import "./Wireless.css";
import Ipform from "../Ipform/Ipform";
import Dnsform from '../Dnsform/Dnsform';
import Wifilogin from '../Wifilogin/Wifilogin';
import Wifipassword from "../Wifipassword/Wifipassword";



export default class Wireless extends React.Component{

    state = {wifi: false, ip_form: false};

    setWifiMod = () => {
        this.setState((state) => {
            return {wifi: !state.wifi}
        });
    };

    render() {
        return (
            <div>
                <h2>Wireless Settings</h2>
                <Wifilogin setWifiMod={this.setWifiMod}
                           wifi={this.state.wifi}
                           wifi_mod={this.state.wifi}
                           dataToState={this.props.dataToState}/>
                 <Wifipassword wifi_mod={this.state.wifi}
                        text={'Security key'}/>
                <Ipform name={"wir_ip"}
                        updateData={this.props.updateData}
                        wifi_mod={!this.state.wifi}
                        dataToState={this.props.dataToState}/>
                <Dnsform name={"wir_dns"}
                         wifi_mod={!this.state.wifi}
                         dataToState={this.props.dataToState}/>
            </div>
        )
    }

}