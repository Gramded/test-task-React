import React from 'react';
import './App.css';
import Ethernet from './Ethernet/Ethernet';
import Wireless from  './Wireless/Wireless';

export default class App extends React.Component{

    regexp_ip = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/);
    regexp_mask = new RegExp(/^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/);
    regexp_dns = new RegExp(/^(http|https):\/\/(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])(:[0-9]+)?$/);

    settings = {
        eth_ip: {
            name: 'eth_ip',
            ip_mod: 'auto',
            ip_address: 'auto',
            ip_mask: 'auto',
            ip_gateway: 'auto'
        },
        eth_dns: {
            name: 'eth_dns',
            dns_mod: 'auto',
            dns_preferred: 'auto',
            dns_alternative: 'auto'
        },
            wir_state: 'false',
            wir_ip: {
                name: 'wir_ip',
                ip_mod: 'auto',
                ip_address: 'auto',
                ip_mask: 'auto',
                ip_gateway: 'auto'
            },
            wir_dns: {
                name: 'wir_dns',
                dns_mod: 'auto',
                dns_preferred: 'auto',
                dns_alternative: 'auto'
            }};

    is_info_right = true;


    dataToState = (id, value) => {
        switch (id) {
            case "eth_ip_address":
                this.settings.eth_ip.ip_address = value;
                break;
            case "eth_ip_subnet_mask":
                this.settings.eth_ip.ip_mask = value;
                break;
            case "eth_ip_def_get":
                this.settings.eth_ip.ip_gateway = value;
                break;
            case 'eth_dns_preferred':
                this.settings.eth_dns.dns_preferred = value;
                break;
            case 'eth_dns_alternative':
                this.settings.eth_dns.dns_alternative = value;
                break;
            case "wir_ip_address":
                this.settings.wir_ip.ip_address = value;
                break;
            case "wir_ip_subnet_mask":
                this.settings.wir_ip.ip_mask = value;
                break;
            case "wir_ip_def_get":
                this.settings.wir_ip.ip_geteway = value;
                break;
            case 'wir_dns_preferred':
                this.settings.eth_dns.dns_preferred = value;
                break;
            case 'wir_dns_alternative':
                this.settings.eth_dns.dns_alternative = value;
                break;
            default:
                console.log(id, value);
        }
    };

    sendJSON = () => {
        this.is_info_right = true;
        this.ipValidator(this.settings.eth_ip);
        this.dnsValidator(this.settings.eth_dns);
        if (this.settings.wir_state !== "false") {
            this.ipValidator(this.settings.wir_ip);
            this.dnsValidator(this.settings.wir_dns);
        }
        if (this.is_info_right === true) {
            console.log(JSON.stringify(this.settings))
        }};

   ipValidator = (obj_name) => {
       let bug_fix_name = [obj_name.name];
        if (obj_name.ip_mod ==="follow") {
            if (this.regexpIP(obj_name.ip_address) === false) {
                document.getElementById(`${obj_name.name}_address`).classList.add('input-false');
                this.is_info_right = false;
            } else {
                document.getElementById(`${obj_name.name}_address`).classList.remove('input-false');
            }
            if (this.regexpMask(obj_name.ip_mask) === false) {
                document.getElementById(`${obj_name.name}_subnet_mask`).classList.add("input-false");
                this.is_info_right = false;
            } else {
                document.getElementById(`${obj_name.name}_subnet_mask`).classList.remove("input-false");
            }
        } else {
            for (let prop in obj_name) {
                obj_name[prop] = "auto";
            }
        }
       obj_name.name = bug_fix_name[0];
    };

   dnsValidator = (obj_name) => {
       let bug_fix_name = [obj_name.name];
       if (obj_name.dns_mod === 'follow') {
           if (this.regexpDNS(obj_name.dns_preferred) === false ) {
               document.getElementById(`${obj_name.name}_preferred`).classList.add('input-false');
               this.is_info_right = false;
           } else {
               document.getElementById(`${obj_name.name}_preferred`).classList.remove('input-false')
           }
       } else {
           for (let prop in obj_name) {
               obj_name[prop] = "auto";
           }
       }
       obj_name.name = bug_fix_name[0];
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
    regexpDNS = (text) => {
        if (this.regexp_dns.test(text) === true && text !== 'auto') {
            return true;
        } else {
            alert('field is incorrectly entered');
            return false;
        }
    };

    dataInputMode = (text) => {
        switch (text) {
            case "auto_mod_eth_ip_false":
                this.settings.eth_ip.ip_mod = 'follow';
                break;
            case "auto_mod_eth_ip_true":
                this.settings.eth_ip.ip_mod = 'auto';
                break;
            case "auto_mode_eth_dns_false":
                this.settings.eth_dns.dns_mod = 'follow';
                break;
            case "auto_mode_eth_dns_true":
                this.settings.eth_dns.dns_mod = 'auto';
                break;
            case "auto_mod_wir_ip_false":
                this.settings.wir_ip.ip_mod = 'follow';
                break;
            case "auto_mod_wir_ip_true":
                this.settings.wir_ip.ip_mod = 'auto';
                break;
            case "auto_mode_wir_dns_false":
                this.settings.wir_dns.dns_mod = 'follow';
                break;
            case "auto_mode_wir_dns_true":
                this.settings.wir_dns.dns_mod = 'auto';
                break;
        }
        console.log(text);
    };

    dataWirMod = (text) => {
        console.log(text);
        if (text === 'wir_mod_false') {
            this.settings.wir_state = 'false';
        } else if (text === 'wir_mod_true') {
            this.settings.wir_state = 'true';
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
            <button onClick={this.sendJSON}>Save</button>
            </div>
        )
    }

}
