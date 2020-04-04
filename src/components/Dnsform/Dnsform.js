import React from 'react';
import Input from '../Input/Input';
import './Dnsform.css';

export default class Dnsform extends React.Component{

    name = 'name';
    wifi_mod_dns = false;
    state = {auto_mod: true, wifi_mod: this.wifi_mod_dns};

    onModeChange = () => {
        this.setState({auto_mod: !this.state.auto_mod, wifi_mod: this.props.wifi_mod_dns});
        setTimeout(() => {if (this.state.wifi_mod === true) {this.props.updateDataDNS(this.state.auto_mod)}}, 100);
        this.props.dataInputMode(`auto_mode_${this.props.name}_${!this.state.auto_mod}`)
    };


    render() {
        return (
            <div className='dns-form'>
                <label htmlFor='ip_auto'>
                    <input id='ip_auto'
                           type='radio'
                           name={this.props.name}
                           defaultChecked
                           value="automate"
                           disabled={this.props.wifi_mod}
                           onChange={this.onModeChange}/>
                    автоматически получить dns
                </label>
                <label htmlFor='ip_follow'>
                    <input id='follow'
                           type='radio'
                           name={this.props.name}
                           value="following"
                           disabled={this.props.wifi_mod}
                           onChange={this.onModeChange}/>
                    я введу dns руками
                </label>
                <div
                    id={this.props.name + "_1"}
                    className={this.state.auto_mod === true ?  "ip-form_inputs disabled" : 'ip-form_inputs'}>
                    <Input
                        text={'Preferred DNS server'}
                        id={`${this.props.name}_preferred`}
                        important
                        disabled={this.state.auto_mod}
                        dataToState={this.props.dataToState}
                        class_name={"test-class2"}/>
                    <Input
                        text={'Alternative DNS server'}
                        id={`${this.props.name}_alternative`}
                        dataToState={this.props.dataToState}
                        disabled={this.state.auto_mod}
                        class_name={"test-class2"}/>
                </div>
            </div>
        )
    }
}