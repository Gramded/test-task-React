import React from 'react';
import Input from '../Input/Input';
import './Ipform.css';

export default class Ipform extends React.Component{

    name = "name";
    wifi_mod_ip = false;
    state = {mode_on_of: true, wifi_mod: this.wifi_mod_ip};



    onModeChange = () => {
        this.setState((state) => {
            return {mode_on_of: !state.mode_on_of, wifi_mod: this.props.wifi_mod_ip}});
        console.log(this.state);
        if (this.state.wifi_mod == true) {
            this.props.updateDataIp(this.state.mode_on_of);
        }
    };



     render() {
         return (
        <div className='ip-form'>
            <label htmlFor='ip_auto'>
            <input id='ip_auto' type='radio'
                   name={this.props.name}
                   defaultChecked
                   value="automate"
                   onChange={this.onModeChange}/>
                автоматически получить ip
            </label>
            <label htmlFor='ip_follow'>
            <input id='follow'
                   type='radio'
                   name={this.props.name}
                   value="following"
                   disabled={this.props.wifi_mod}
                   onChange={this.onModeChange}/>
                я введу ip руками
            </label>
            <div
                id={this.props.name + "_1"}
                className={this.state.mode_on_of === true ?  "ip-form_inputs disabled" : 'ip-form_inputs'}>
                <Input text={'IP address'}
                       id={`${this.props.name}_address`}
                       important
                       disabled={this.state.mode_on_of}
                       dataToState={this.props.dataToState} />
                <Input text={'Subnet Mask'}
                       id={`${this.props.name}_subnet_mask`}
                       important
                       disabled={this.state.mode_on_of}
                       dataToState={this.props.dataToState} />
                <Input text={"Default Gateway"}
                       id={`${this.props.name}_def_get`}
                       disabled={this.state.mode_on_of}
                       dataToState={this.props.dataToState} textType />
            </div>
        </div>
         )
     }
}