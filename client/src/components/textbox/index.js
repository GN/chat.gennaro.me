import React, {useState} from 'react';
import io from 'socket.io-client';
import axios from 'axios';

function TextBox(){
    const[message, setMessage] = useState();

    const emitMessage = (m) => {
        const socket = io('//localhost:5000');
        axios.get('https://www.cloudflare.com/cdn-cgi/trace').then( function (res) {
            socket.emit('ip', res.data.split("ip=")[1].split("\n")[0]);
            socket.emit('send', m);
            setMessage("");
            console.log(res.data.split("ip=")[1].split("\n")[0]);
        }).catch(function (err) {
            console.log(err);
        });
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