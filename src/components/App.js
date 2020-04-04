import React from 'react';
import './App.css';
import Ethernet from './Ethernet/Ethernet';
import Wireless from  './Wireless/Wireless';

export default class App extends React.Component{

    regexp_ip = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
    regexp_mask = new RegExp(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/);
    regexp_dns = new RegExp(/^[sap](([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/);

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

    is_info_right = true;


    dataToState = (id, value) => {
        switch (id) {
            case "eth_ip_address":
                this.settings.ethernet_ip.ethernet_ip_address = value;
                break;
            case "eth_ip_subnet_mask":
                this.settings.ethernet_ip.ethernet_ip_mask = value;
                break;
            case "eth_ip_def_get":
                this.settings.ethernet_ip.ethernet_ip_gateway = value;
                break;
            case "wir_ip_address":
                this.settings.wifi_ip.wifi_ip_address = value;
                break;
            case "wir_ip_subnet_mask":
                this.settings.wifi_ip.wifi_ip_mask = value;
                break;
            case "wir_ip_def_get":
                this.settings.wifi_ip.wifi_ip_geteway = value;
                break;
            default:
                console.log(id, value);
        }
    };

    test_json = () => {
        this.is_info_right = true;
        this.ethernetIPValidator();
        if (this.is_info_right === true) {console.log(JSON.stringify(this.settings))}};

    ethernetIPValidator = () => {
        if (this.settings.ethernet_ip.ethernet_ip_mod ==="follow") {
            if (this.regexpIP(this.settings.ethernet_ip.ethernet_ip_address) === false) {
                document.getElementById('eth_ip_address').classList.add('input-false');
                this.is_info_right = false;
            } else {
                document.getElementById('eth_ip_address').classList.remove('input-false');
            }
            if (this.regexpMask(this.settings.ethernet_ip.ethernet_ip_mask) === false) {
                document.getElementById('eth_ip_subnet_mask').classList.add("input-false");
                this.is_info_right = false;
            } else {
                document.getElementById('eth_ip_subnet_mask').classList.remove("input-false");
            }
        } else {
            for (let prop in this.settings.ethernet_ip) {
                this.settings.ethernet_ip[prop] = "auto";
            }
        }
    };

    regexpIP = (text) => {
        if (this.regexp_ip.test(text) === true && text !== 'auto') {
            return true;
        } else {
            alert('field is incorrectly entered');
            return false;
        }
    };
    regexpMask = (text) => {
        if (this.regexp_mask.test(text) === true && text !== 'auto') {
            return true;
        } else {
            alert('field is incorrectly entered');
            return false;
        }
    };
    regexpDNS = () => {

    };

    dataInputMode = (text) => {
        switch (text) {
            case "auto_mod_eth_ip_false":
                this.settings.ethernet_ip.ethernet_ip_mod = 'follow';
                break;
            case "auto_mod_eth_ip_true":
                this.settings.ethernet_ip.ethernet_ip_mod = 'auto';
                break;
            case "auto_mod_eth_dns_false":
                this.settings.ethernet_dns.ethernet_dns_mod = 'follow';
                break;
            case "auto_mod_eth_dns_true":
                this.settings.ethernet_dns.ethernet_dns_mod = 'auto';
                break;
            case "auto_mod_wir_ip_false":
                this.settings.wifi_ip.wifi_ip_mod = 'follow';
                break;
            case "auto_mod_wir_ip_true":
                this.settings.wifi_ip.wifi_ip_mod = 'auto';
                break;
            case "auto_mode_wir_dns_false":
                this.settings.wifi_dns.wifi_dns_mod = 'follow';
                break;
            case "auto_mode_wir_dns_true":
                this.settings.wifi_dns.wifi_dns_mod = 'auto';
                break;
        }
        console.log(text);
    };

    dataWirMod = (text) => {
        console.log(text);
        if (text === 'wir_mod_false') {
            this.settings.wir_state = 'false';
            this.settings.wifi_ip = undefined;
            this.settings.wifi_dns = undefined;
            console.log('false');
        } else if (text === 'wir_mod_true') {
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
