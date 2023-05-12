import React from 'react';
import {car} from './../assets/car.png'
import {car2} from './../assets/car2.png'


export class Message extends React.Component {

    render() {
        return (
            <div className='message-item msg-card' style={{textAlign:this.props.socket_id==this.props.senderName?'right':'left',marginLeft:this.props.socket_id==this.props.senderName?'auto':''}}>
                <div style={{width:'60px'}}>
                    <img 
                    style={{width:'100%'}} 
                    src={this.props.socket_id==this.props.senderName?car:car2}
                    />
                </div>
                <div>
                    <div><b>{this.props.senderName}</b></div>
                    <span>{this.props.text}</span>
                </div>
            </div>
        )
    }
}