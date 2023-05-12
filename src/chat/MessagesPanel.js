import React from 'react';
import { Message } from './Message';

export class MessagesPanel extends React.Component {
    state = { input_value: '' }
    send = (e) => {
        e.preventDefault()
        if (this.state.input_value && this.state.input_value != '') {
            this.props.onSendMessage(this.props.channel.id, this.state.input_value);
            this.setState({ input_value: '' });
        }
    }

    handleInput = e => {
        this.setState({ input_value: e.target.value });
    }

    render() {

        let list = <div className="no-content-message">There is no messages to show</div>;
        if (this.props.channel && this.props.channel.messages) {
            list = this.props.channel.messages.map(m => <Message key={m.id} id={m.id} socket_id={this.props.socket_id} senderName={m.senderName} text={m.text} />);
        }
        return (
            <div className='messages-panel'>
                <div className="meesages-list">{list}</div>
                {this.props.channel &&
                        <form onSubmit={this.send} style={{width:'100%'}}>
                    <div className="messages-input">
                            <input type="text" onChange={this.handleInput} value={this.state.input_value} />
                            <button type='submit'>Send</button>
                    </div>
                        </form>
                }
            </div>);
    }

}