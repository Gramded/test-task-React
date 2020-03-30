import React from 'react';
import './Wifilogin.css';
import Wifiname from '../Wifiname/Wifiname';

export default class Wifilogin extends React.Component{

    name = "name";
    wifi_mod = false;

    render() {

        return (
            <div className=''>
                <label htmlFor={"wireless_name"}>
                    <input id={'wireless_name'}
                           type='checkbox'
                           checked={this.props.wifi}
                           onChange={this.props.setWifiMod}/>
                    {'Enable Wifi:'}
                </label>
                    <Wifiname
                        text={'Wireless Network Name: '}
                        id={'wireless_wifi_name'}
                        name={'wifi_name'}
                        disabled={!this.props.wifi_mod}
                        dataToState={this.props.dataToState}
                        value_1={'name_1'}
                        value_2={'name_2'}
                        value_3={'name_3'}
                    />
            </div>
        );
    }
};

