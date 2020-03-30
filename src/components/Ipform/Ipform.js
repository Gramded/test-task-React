import React from 'react';
import Input from '../Input/Input';
import './Ipform.css';

export default class Ipform extends React.Component{

    name = "name";
    wifi_mod = false;
    wifi_mod_form = false;
    state = {mode_on_of: "automate"};



    onModeChange = (event) => {
        this.setState({mode: event.target.value});
        this.inputDisabler();
    };

    inputDisabler () {
        let test = document.getElementById(`${this.props.name}_1`).childNodes;
        if (this.state.mode === "automate") {
            test.forEach((item) => {
                item.control.removeAttribute('disabled');
            })
        } else {
            for (let i = 0; i < test.length; i++) {
                test[i].control.setAttribute('disabled', "true")
            }
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
                className={this.state.mode === "automate" ?  "ip-form_inputs disabled" : 'ip-form_inputs'}>
                <Input text={'IP address'}
                       id={`${this.props.name}_address`}
                       important
                       disabled={this.props.wifi_mod_form}
                       dataToState={this.props.dataToState} />
                <Input text={'Subnet Mask'}
                       id={`${this.props.name}_subnet_mask`}
                       important
                       disabled={this.props.wifi_mod_form}
                       dataToState={this.props.dataToState} />
                <Input text={"Default Gateway"}
                       id={`${this.props.name}_def_get`}
                       disabled={this.props.wifi_mod}
                       dataToState={this.props.dataToState} textType />
            </div>
        </div>
         )
     }
}