import React from 'react';
import Input from '../Input/Input';
import './Ipform.css';

export default class Ipform extends React.Component{

    state = {mode: "automate"};

    onModeChange = (event) => {
        this.setState({mode: event.target.value})
    };

     render() {
         return (
        <div className='ip-form'>
            <label htmlFor='ip_auto'>
            <input id='ip_auto' type='radio' name='ether-ip' defaultChecked value="automate" onChange={this.onModeChange}/>
                автоматически получить ip
            </label>
            <label htmlFor='ip_follow'>
            <input id='follow' type='radio' name='ether-ip' value="following" onChange={this.onModeChange}/>
                я введу ip руками
            </label>
            <div className={this.state.mode === "automate" ?  "ip-form_inputs disabled" : 'ip-form_inputs'}>
                <Input text={'max kot'} important dataToState={this.props.dataToState}/>
                <Input text={'сюда маску'} dataToState={this.props.dataToState}/>
                <Input text={"пробный"} dataToState={this.props.dataToState} textType />
            </div>
        </div>
         )
     }
}