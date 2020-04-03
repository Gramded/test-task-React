import React from 'react';
import './App.css';
import Ethernet from './Ethernet/Ethernet';
import Wireless from  './Wireless/Wireless';

export default class App extends React.Component{

    settings = {
        ethernet_ip: {
        ethernet_ip_mod: 'auto',
        ethernet_ip_address: 'auto',
        ethernet_ip_mask: 'auto',
        ethernet_ip_gateway: 'auto'
        },
        ethernet_dns: {
        ethernet_dns_mod: 'auto',
        ethernet_dns_preferred: 'auto',
        ethernet_dns_alternative: 'auto'
        },
        wir_state: 'false',
        wifi_ip: undefined,
        wifi_dns: undefined};


    dataToState = (id, value) => {
        switch (id) {
            case "eth_ip_address":
                this.settings.ethernet_ip.ethernet_ip_address = value;
                break;
            case "eth_ip_subnet_mask":
                this.settings.ethernet_ip.ethernet_ip_mask = value;
                break;
            case "wir_ip_address":
                this.settings.wifi_ip.wifi_ip_address = value;
                break;
            default:
                console.log(id, value);
        }
    };

    test_json = () => {console.log(JSON.stringify(this.settings))};

    dataInputMode = (text) => {
        console.log(text);
    };

    dataWirMod = (text) => {
        console.log(text)
        if (text == 'wir_mod_false') {
            this.settings.wir_state = 'false';
            this.settings.wifi_ip = undefined;
            this.settings.wifi_dns = undefined;
            console.log('false');
        } else if (text == 'wir_mod_true') {
            this.settings.wir_state = 'true';
            this.settings.wifi_ip = {
                wifi_ip_mod: 'auto',
                wifi_ip_address: 'auto',
                wifi_ip_mask: 'auto',
                wifi_ip_gateway: 'auto'
            };
            this.settings.wifi_dns = {
                wifi_dns_mod: 'auto',
                wifi_dns_preferred: 'auto',
                wifi_dns_alternative: 'auto'
            };
        }
    };

    render() {
        return (
            <div className="app">
            <Ethernet
                dataInputMode={this.dataInputMode}
                dataToState={this.dataToState}/>
            <Wireless
                dataInputMode={this.dataInputMode}
                dataWirMod={this.dataWirMod}
                dataToState={this.dataToState}/>
            <button onClick={this.test_json}>test button</button>
            </div>
        )
    }

}
