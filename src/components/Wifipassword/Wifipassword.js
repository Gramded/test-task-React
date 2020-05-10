import React from 'react';
import './Wifipassword.css';

export default class Wifipassword extends React.Component{

    text = 'text';
    wifi_mod = true;
    state = {wifi_mod_password: false};

    wir_sec_mod = () => {
        this.setState((state) => {
            return {wifi_mod_password: !state.wifi_mod_password};
        });
    };

    render() {
        return (
            <div className={
             !this.props.wifi_mod === false ? "wifi-password" : "wifi-password  off"
            }>
                <label htmlFor={'max'}>
                    <input id={'max'} type='checkbox' disabled={!this.props.wifi_mod} onChange={this.wir_sec_mod}/>
                    Enable Wireless Security:
                </label>
                <br/>
                <label className={
                    !this.state.wifi_mod_password === false ? '' : 'off'
                }>
                    {this.props.text}
                    <input type='password' disabled={
                        this.state.wifi_mod_password && !this.props.wifi_mod === false ? false : true
                    }/>
                </label>
            </div>
        )
    }
}