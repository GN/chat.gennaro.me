import React, {useState} from 'react';

function TextBox(props){
    const[message, setMessage] = useState();

    const emitMessage = (m) => {
        props.socket.emit('ip', props.ip + " sent: " + m);
        props.socket.emit('send', {message: m, screenName: localStorage.getItem('screenName') || 'Anonymous'});
        setMessage('');
    };

    function handleKeyPress(e){
        if(e.key === 'Enter' && !e.shiftKey){
            emitMessage(message);
        }
    }

    return(
        <form onSubmit={e => e.preventDefault()} className={''}>
            <div className={'form-group mb-0'}>
                <textarea id={'message'} className={'form-control rounded-0'} rows={5} onKeyPress={(e)=>handleKeyPress(e)} onChange={e => setMessage(e.target.value)} value={message} placeholder={'Hello, world!'}/>
                <button className={'btn btn-primary btn-lg btn-block rounded-0'} onClick={() => emitMessage(message)}>Send Message</button>
            </div>
        </form>
    );


}

export default TextBox;