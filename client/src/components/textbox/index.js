import React, {useState} from 'react';

function TextBox(props){
    const[message, setMessage] = useState();

    const emitMessage = (m) => {
        props.socket.emit('ip', props.ip + " sent: " + m);
        props.socket.emit('send', m);
        setMessage('');
    };

    return(
        <form onSubmit={e => e.preventDefault()} className={''}>
            <div className={'form-group mb-0'}>
                <textarea id={'message'} className={'form-control rounded-0'} rows={5} onChange={e => setMessage(e.target.value)} value={message} placeholder={'Hello, world!'}/>
                <button className={'btn btn-primary btn-lg btn-block rounded-0'} onClick={() => emitMessage(message)}>Send Message</button>
            </div>
        </form>
    );


}

export default TextBox;