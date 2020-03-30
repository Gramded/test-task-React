import React from 'react';
import Input from '../Input/Input';
import './Dnsform.css';

export default class Dnsform extends React.Component{

    state = {mode: "automate"};
    name = 'name';
    wifi_mod = false;

    onModeChange = (event) => {
        this.setState({mode: event.target.value});
        this.inputDisabler(event)
    };

    inputDisabler () {
        let test = document.getElementById(`${this.props.name}_1`).childNodes;
        console.log(this.state);
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
            <div className='dns-form'>
                <label htmlFor='ip_auto'>
                    <input id='ip_auto'
                           type='radio'
                           name={this.props.name}
                           defaultChecked
                           value="automate"
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
                    className={this.state.mode === "automate" ?  "ip-form_inputs disabled" : 'ip-form_inputs'}>
                    <Input
                        text={'Preferred DNS server'}
                        id={`${this.props.name}_preferred`}
                        important
                        dataToState={this.props.dataToState}
                        class_name={"test-class2"}/>
                    <Input
                        text={'Alternative DNS server'}
                        id={`${this.props.name}_alternative`}
                        dataToState={this.props.dataToState}
                        class_name={"test-class2"}/>
                </div>
            </div>
        )
    }
}