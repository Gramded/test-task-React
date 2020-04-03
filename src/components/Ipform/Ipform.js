import React from 'react';
import Input from '../Input/Input';
import './Ipform.css';

export default class Ipform extends React.Component{

    name = "name";
    wifi_mod_ip = false;
    state = {auto_mod: true, wifi_mod: this.wifi_mod_ip};
    // dataTest;



    onModeChange = () => {
        this.setState({auto_mod: !this.state.auto_mod, wifi_mod: this.props.wifi_mod_ip});
        setTimeout(() => {if (this.state.wifi_mod == true) {this.props.updateDataIp(this.state.auto_mod)}}, 100);
        setTimeout(() => {console.log(this.state)}, 100);
        // (if (this.state.wifi_mod == true) {
        //     this.props.updateDataIp(this.state.auto_mod);
        // }
        this.props.dataInputMode(`auto_mod_${this.props.name}_${!this.state.auto_mod}`);
    };



     render() {
         return (
        <div className='ip-form'>
            <label htmlFor='ip_auto'>
            <input id='ip_auto' type='radio'
                   name={this.props.name}
                   defaultChecked
                   value="automate"
                   disabled={this.props.wifi_mod}
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
                className={this.state.auto_mod === true ?  "ip-form_inputs disabled" : 'ip-form_inputs'}>
                <Input text={'IP address'}
                       id={`${this.props.name}_address`}
                       important
                       disabled={this.state.auto_mod}
                       dataToState={this.props.dataToState} />
                <Input text={'Subnet Mask'}
                       id={`${this.props.name}_subnet_mask`}
                       important
                       disabled={this.state.auto_mod}
                       dataToState={this.props.dataToState} />
                <Input text={"Default Gateway"}
                       id={`${this.props.name}_def_get`}
                       disabled={this.state.auto_mod}
                       dataToState={this.props.dataToState} textType />
            </div>
        </div>
         )
     }
}