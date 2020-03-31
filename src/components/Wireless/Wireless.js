import React from 'react';
import "./Wireless.css";
import Ipform from "../Ipform/Ipform";
import Dnsform from '../Dnsform/Dnsform';
import Wifilogin from '../Wifilogin/Wifilogin';
import Wifipassword from "../Wifipassword/Wifipassword";



export default class Wireless extends React.Component{

    state = {wifi: false, ip_form: false, dns_form: false};


    setWifiMod = () => {
        setTimeout( () => {console.log(this.state)}, 100);
        this.setState({wifi: !this.state.wifi});
        setTimeout( () => {this.updateDataIp(!this.state.ip_form)}, 100);
        let bug_fix = document.getElementById('wir_ip_1').childNodes;
        if (this.state.wifi === true) {
            bug_fix.forEach((item) => {
                item.control.setAttribute("disabled", 'true')
            })
        } else if (this.state.wifi !== true && this.state.ip_form === true) {
            bug_fix.forEach((item) => {
                item.control.removeAttribute("disabled")
            })
        }
    };

    updateDataIp = (arg) => {
        this.setState( { ip_form: arg });
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
                        wifi_mod={!this.state.wifi}
                        wifi_mod_ip={this.state.wifi}
                        updateDataIp={this.updateDataIp}
                        dataToState={this.props.dataToState}/>
                <Dnsform name={"wir_dns"}
                         wifi_mod={!this.state.wifi}
                         updateDataIp={this.updateDataIp}
                         dataToState={this.props.dataToState}/>
            </div>
        )
    }

}