import React from 'react';
import "./Wireless.css";
import Ipform from "../Ipform/Ipform";
import Dnsform from '../Dnsform/Dnsform';
import Wifilogin from '../Wifilogin/Wifilogin';
import Wifipassword from "../Wifipassword/Wifipassword";



export default class Wireless extends React.Component{

    state = {wifi: false, ip_form: false, dns_form: false};


    setWifiMod = () => {
        this.setState({wifi: !this.state.wifi});
        this.offInputs();
    };

    offInputs () {
        this.updateDataIp(!this.state.ip_form);
        this.updateDataDNS(!this.state.dns_form);
        let bug_fix_ip = document.getElementById('wir_ip_1').childNodes;
        let bug_fix_dns = document.getElementById('wir_dns_1').childNodes;
        if (this.state.wifi === true) {
            bug_fix_ip.forEach((item) => {
                item.control.setAttribute("disabled", 'true')
            })
        } else if (this.state.wifi !== true && this.state.ip_form === true) {
            bug_fix_ip.forEach((item) => {
                item.control.removeAttribute("disabled")
            })
        }
        if (this.state.wifi === true) {
            bug_fix_dns.forEach((item) => {
                item.control.setAttribute("disabled", 'true')
            })
        } else if (this.state.wifi !== true && this.state.dns_form === true) {
            bug_fix_dns.forEach((item) => {
                item.control.removeAttribute("disabled")
            })
        }
        this.props.dataWirMod(`wir_mod_${!this.state.wifi}`);
    }

    updateDataIp = (arg) => {
        this.setState( { ip_form: arg });
    };

    updateDataDNS = (arg) => {
        this.setState( { dns_form: arg });
    };


    render() {
        return (
            <div className="work_place-wireless">
                <h2>Wireless Settings</h2>
                <Wifilogin setWifiMod={this.setWifiMod}
                           wifi={this.state.wifi}
                           wifi_mod={this.state.wifi}
                           dataToState={this.props.dataToState}/>
                 <Wifipassword wifi_mod={this.state.wifi}
                        name={'wir_pass'}
                        dataToState={this.props.dataToState}
                        text={'Security key'}/>
                <Ipform name={"wir_ip"}
                        wifi_mod={!this.state.wifi}
                        wifi_mod_ip={this.state.wifi}
                        updateDataIp={this.updateDataIp}
                        dataInputMode={this.props.dataInputMode}
                        dataToState={this.props.dataToState}/>
                <Dnsform name={"wir_dns"}
                         wifi_mod={!this.state.wifi}
                         wifi_mod_dns={this.state.wifi}
                         dataInputMode={this.props.dataInputMode}
                         updateDataDNS={this.updateDataDNS}
                         dataToState={this.props.dataToState}/>
            </div>
        )
    }

}