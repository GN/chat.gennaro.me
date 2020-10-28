import React, {useEffect, useState, useRef} from "react";
import './../../index.css';

function MessageFeed(props) {
    const [messages, setMessages] = useState([]);
    const tableRef = useRef(null);


    useEffect(() => {

        // props.socket.on('receive', function(message){
        //     setMessages(messages.concat(<tr key={messages.length}><td>{message}</td></tr>));
        // });
        // return()=>{
        //     props.socket.off('receive', function(message){
        //         setMessages(messages.concat(<tr key={messages.length}><td>{message}</td></tr>));
        //     });
        // }
        const handle = (message) => {
            setMessages(messages.concat(<tr key={messages.length}><td>{message}</td></tr>));
            tableRef.current.scrollTop = tableRef.current.scrollHeight;
        }
        props.socket.on('receive', handle);
        return () => {props.socket.off('receive', handle);}

    },[messages, props.socket]);

    return (
        <div className="card border-secondary mb-3 flex-grow-1 rounded-0">
            <div className="card-header rounded-0">Chat Room</div>
            <div ref={tableRef} className={'card h-100 flex-grow-1 overflow-auto'}>
                <div className="card-body d-flex flex-shrink-0">
                    <div className='card-text '>
                        <div className="position-absolute">
                            <table>
                                <tbody>
                                {messages}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default MessageFeed;